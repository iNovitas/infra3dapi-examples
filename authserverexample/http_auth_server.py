from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib import request, parse


class MyHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):

        # URL to which you want to make the POST request
        url = 'https://infra3d-idp-dev.auth.eu-west-1.amazoncognito.com/oauth2/token'

        # Data to be sent in the POST request
        data = parse.urlencode({
            'grant_type': 'client_credentials',
            'client_id': '719hvejtvtk20pdja2bc3864nr',
            'client_secret': '1ved2qe750ipv6roc9ahgqemuanc4k5aqbuknbkmc4j522qj5r0s'
        }).encode()

        try:
            # Make the POST request
            req = request.Request(url, data=data, method='POST')
            with request.urlopen(req) as response:
                response_data = response.read()
                # Send the response back to the client
                self.send_response(response.code)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
                self.send_header('Access-Control-Allow-Headers', 'X-Requested-With')
                self.end_headers()
                self.wfile.write(response_data)
        except Exception as e:
            self.send_error(500, str(e))


def run(server_class=HTTPServer, handler_class=MyHTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting proxy server on port {port}...")
    httpd.serve_forever()


if __name__ == "__main__":
    run()
