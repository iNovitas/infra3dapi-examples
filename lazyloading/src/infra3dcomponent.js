
export async function loadInfra3D() {
    const infra3d = await import(/* webpackChunkName: "infra3d" */ "@inovitas/infra3dapi");
    const mytokenrespones = await infra3d.getGuestAccessToken();
    const manager = await infra3d.init(
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

    return viewer;
}
  
  
  