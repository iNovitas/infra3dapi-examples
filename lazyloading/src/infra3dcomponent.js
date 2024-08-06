
export async function loadInfra3D() {
    await import("https://cdn.jsdelivr.net/npm/@inovitas/infra3dapi@1.0.2");
    const mytokenrespones = await infra3dapi.getGuestAccessToken();
    const manager = await infra3dapi.init(
      "viewer", 
      mytokenrespones.access_token, 
      {
        username: "Guest", 
        email: "support@inovitas.ch"
      }
    );
    const fetchedProjects = await manager.getProjects();
    const projectUID = fetchedProjects[0].uid;
    const viewer = await manager.initViewer({
      project_uid: projectUID,
      show_toolbar: true,
      toolbar: "edit",
      show_topbar: true,
      show_cockpit: true,
      show_mapWindow: false
    });
    viewer.on("campaignschanged", (campaigns) =>
      console.log("Campaign: ", campaigns)
    );

    return viewer;
}
  
  
  