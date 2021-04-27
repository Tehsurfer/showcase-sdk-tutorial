const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'u3qakhenu1kskfr12s9sg57gc';

// declare this file is a module
export {};

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}



showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
  }
  catch(e) {
    console.error(e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
  const lights = await sdk.Scene.createNode();
  lights.addComponent('mp.lights');
  lights.start();
  const modelNode = await sdk.Scene.createNode();

  // Store the fbx component since we will need to adjust it in the next step.
  const fbxComponent = modelNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
    url: './boat.fbx',
  });
  fbxComponent.inputs.localScale = {
    x: 0.152,
    y: 0.152,
    z: 0.152
  };
  (window as any).compo = fbxComponent
  modelNode.obj3D.position.set(-3,-0.3,-3); // drop ~3 feet
  
  modelNode.start();
  const tick = function() {
    requestAnimationFrame(tick);
    modelNode.obj3D.rotation.y += 0.00001;
  }
  tick();
  
});