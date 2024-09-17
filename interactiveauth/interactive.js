var infra3dinteractivelogin = (function() {
    var version = '0.1.0';

    function logVersion() {
        console.log('infra3dinteractivelogin version: ' + version);
    }

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }

    async function generateCodeChallenge(verifier) {
        const encoder = new TextEncoder();
        const data = encoder.encode(verifier);
        const digest = await crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode(...new Uint8Array(digest)))
            .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    async function login(
        clientId, 
        redirectUri,
        oauthUri,
        { popupWidth = '500', popupHeight = '600', identityProvider = '' , mode = 'popup', containerDiv = 'viewer'} = {}
    ) {
        const codeVerifier = generateRandomString(128);
      
        const codeChallenge = await generateCodeChallenge(codeVerifier);
      
        let authUrl = `${oauthUri}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
        if (identityProvider)
        {
            authUrl += `&identity_provider=${identityProvider}`
        }

        if (mode == 'popup')
        {
            window.open(authUrl, 'Login', `width=${popupWidth},height=${popupHeight}`);
        }
        else if (mode == 'iframe')
        {
            const viewerDiv = document.getElementById(containerDiv)
            const iframe = document.createElement("iframe");
            iframe.style.height = "100%";
            iframe.style.width = "100%";
            iframe.style.overflow = "hidden";
            iframe.style.overflowY = "hidden";
            iframe.style.border = "none";
            viewerDiv.appendChild(iframe);
            iframe.src = authUrl;
        }
        
        const authCode = await new Promise((resolve, reject) => {
          const listener = (event) => {
            const parsed_url = new URL(redirectUri)
            if (event.origin === parsed_url.origin) {
              resolve(event.data);
              window.removeEventListener('message', listener);
            } else {
              reject(new Error('Origin mismatch'));
            }
          };
          window.addEventListener('message', listener);
        });
      
        const tokenUrl = `${oauthUri}/token`;
      
        const body = new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: clientId,
          redirect_uri: redirectUri,
          code: authCode,
          code_verifier: codeVerifier
        });
      
        const response = await fetch(tokenUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: body
        });
      
        const tokens = await response.json();
        const idtoken_data = JSON.parse(atob(tokens.id_token.split('.')[1]));
        return {
          access_token: tokens.access_token,
          username: idtoken_data["cognito:username"],
          email: idtoken_data["email"]
        }
    }

    return {
        getVersion: function() {
            logVersion();
            return version;
        },
        login: async function(...args) {
            return login(...args)
        },
        logout: async function(...args) {
          return logout(...args)
      }
    };
})();








