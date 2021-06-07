const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const loadSceneButton = document.getElementById('scene-loader') as HTMLButtonElement
const sceneText = document.getElementById('scene-text') as HTMLInputElement
import maskScene from './mask-scene.js'
// const lll = 'db4d6653-164a-4cfc-87d5-4f38e0756512'
// const lll = process.env.matt
const lll = '3shcz94qe9h51ihb2yp1p6rpb';

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
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, lll, '3.6');
  }
  catch(e) {
    console.error(e);
    return;
  }

  loadSceneButton.onclick = async function(){
    const models = await sdk.Scene.deserialize(sceneText.value);
    console.log('deserialising')
    for( let i in models){
      models[i].start()
    }
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
  // const lights = await sdk.Scene.createNode();
  // lights.addComponent('mp.lights');
  // lights.start();
  // const modelNode = await sdk.Scene.createNode();
  // (window as any).sdk = sdk

// const maskScene = '{"version":"1.0","payload":{"objects":[{"name":"New Model","position":{"x":-2.9030902443625566,"y":1.4236122401493585,"z":-0.943789902974884},"rotation":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1},"components":[{"type":"mp.gltfLoader","inputs":{"url":"https:\/\/mapcore-bucket1.s3-us-west-2.amazonaws.com\/jesses-plot-testing\/mask.glb","materialUrl":"","visible":true,"localScale":{"x":0.18,"y":0.18,"z":0.18},"localRotation":{"x":-8,"y":-170,"z":0},"localPosition":{"x":-0.27,"y":-0.51,"z":-0.35},"colliderEnabled":true},"events":{"INTERACTION.CLICK":true,"INTERACTION.HOVER":true,"INTERACTION.DRAG":false,"INTERACTION.DRAG_BEGIN":false,"INTERACTION.DRAG_END":false,"INTERACTION.POINTER_MOVE":false,"INTERACTION.POINTER_BUTTON":false,"INTERACTION.SCROLL":false,"INTERACTION.KEY":false,"INTERACTION.LONG_PRESS_START":false,"INTERACTION.LONG_PRESS_END":false,"INTERACTION.MULTI_SWIPE":false,"INTERACTION.MULTI_SWIPE_END":false,"INTERACTION.PINCH":false,"INTERACTION.PINCH_END":false,"INTERACTION.ROTATE":false,"INTERACTION.ROTATE_END":false}}],"bindings":[]},{"name":"Directional Light","position":{"x":-1.3508506628185182,"y":3.9503212845502453,"z":0.883398758831444},"rotation":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1},"components":[{"type":"mp.directionalLight","inputs":{"enabled":true,"color":{"r":1,"g":1,"b":1},"intensity":2,"position":{"x":1,"y":5,"z":1},"target":{"x":0,"y":0,"z":0},"castShadow":false,"debug":false},"events":{"INTERACTION.CLICK":false,"INTERACTION.HOVER":false,"INTERACTION.DRAG":false,"INTERACTION.DRAG_BEGIN":false,"INTERACTION.DRAG_END":false,"INTERACTION.POINTER_MOVE":false,"INTERACTION.POINTER_BUTTON":false,"INTERACTION.SCROLL":false,"INTERACTION.KEY":false,"INTERACTION.LONG_PRESS_START":false,"INTERACTION.LONG_PRESS_END":false,"INTERACTION.MULTI_SWIPE":false,"INTERACTION.MULTI_SWIPE_END":false,"INTERACTION.PINCH":false,"INTERACTION.PINCH_END":false,"INTERACTION.ROTATE":false,"INTERACTION.ROTATE_END":false}}],"bindings":[]},{"name":"Ambient Light","position":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1},"components":[{"type":"mp.ambientLight","inputs":{"enabled":true,"color":{"r":0.2,"g":0.2,"b":0.2},"intensity":1},"events":{"INTERACTION.CLICK":false,"INTERACTION.HOVER":false,"INTERACTION.DRAG":false,"INTERACTION.DRAG_BEGIN":false,"INTERACTION.DRAG_END":false,"INTERACTION.POINTER_MOVE":false,"INTERACTION.POINTER_BUTTON":false,"INTERACTION.SCROLL":false,"INTERACTION.KEY":false,"INTERACTION.LONG_PRESS_START":false,"INTERACTION.LONG_PRESS_END":false,"INTERACTION.MULTI_SWIPE":false,"INTERACTION.MULTI_SWIPE_END":false,"INTERACTION.PINCH":false,"INTERACTION.PINCH_END":false,"INTERACTION.ROTATE":false,"INTERACTION.ROTATE_END":false}}],"bindings":[]},{"name":"Directional Light","position":{"x":3.0436472252044795,"y":-1.3291552293586562,"z":-0.3223766780137181},"rotation":{"x":0,"y":0,"z":0},"scale":{"x":1,"y":1,"z":1},"components":[{"type":"mp.directionalLight","inputs":{"enabled":true,"color":{"r":1,"g":1,"b":1},"intensity":2,"position":{"x":1,"y":5,"z":1},"target":{"x":0,"y":0,"z":0},"castShadow":false,"debug":false},"events":{"INTERACTION.CLICK":false,"INTERACTION.HOVER":false,"INTERACTION.DRAG":false,"INTERACTION.DRAG_BEGIN":false,"INTERACTION.DRAG_END":false,"INTERACTION.POINTER_MOVE":false,"INTERACTION.POINTER_BUTTON":false,"INTERACTION.SCROLL":false,"INTERACTION.KEY":false,"INTERACTION.LONG_PRESS_START":false,"INTERACTION.LONG_PRESS_END":false,"INTERACTION.MULTI_SWIPE":false,"INTERACTION.MULTI_SWIPE_END":false,"INTERACTION.PINCH":false,"INTERACTION.PINCH_END":false,"INTERACTION.ROTATE":false,"INTERACTION.ROTATE_END":false}}],"bindings":[]}]}}'
  const models = await sdk.Scene.deserialize(maskScene);
    console.log('deserialising')
    for( let i in models){
      models[i].start()
    }

  // // Store the fbx component since we will need to adjust it in the next step.
  // const fbxComponent = modelNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
  //   url: './boat.fbx',
  // });
  // fbxComponent.inputs.localScale = {
  //   x: 0.152,
  //   y: 0.152,
  //   z: 0.152
  // };
  // (window as any).compo = fbxComponent
  // modelNode.obj3D.position.set(15,1,-3); // drop ~3 feet
  
  // modelNode.start();
  // const tick = function() {
  //   requestAnimationFrame(tick);
  //   modelNode.obj3D.rotation.y += 0.01;
  // }
  // tick();
  
});