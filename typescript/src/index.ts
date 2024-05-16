
import * as infra3d from "@inovitas/infra3dapi"

async function loadInfra3D():Promise<infra3d.IViewer> {
    const mytokenrespones: infra3d.accessTokenResponseType = await infra3d.getGuestAccessToken();
    const manager: infra3d.Manager= await infra3d.init(
      "viewer", 
      mytokenrespones.access_token, 
      {
        username: "Guest", 
        email: "support@inovitas.ch"
      }
    );
    const fetchedProjects: infra3d.cardProps[]= await manager.getProjects();
    const projectUID: string = fetchedProjects[0].uid;
    const myviewer: infra3d.Viewer = await manager.initViewer({
      project_uid: projectUID,
      show_toolbar: true,
      toolbar: "edit",
      show_topbar: true,
      show_cockpit: true,
      show_mapWindow: false
    });
    return myviewer;
}

loadInfra3D().then((viewer:infra3d.Viewer)=>{
  console.log("token successfully initialized infra3dapi");
  viewer.on("panorotationchanged", (event:infra3d.PanorotationchangedEvent)=>{
    console.log(event.fov);
  });

}).catch((error)=>{
  console.error("Error during initialization:", error)
});