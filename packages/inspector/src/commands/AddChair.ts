import { MenuCommandFactory, IMenuCommand, IDialogUser, IContext } from '../interfaces';
import { cdnUrl, ISceneNode } from '@mp/common';

class AddChair implements IMenuCommand<void> {
  constructor(private context: IContext) {}

  dialogUser(): IDialogUser {
    return null;
  }

  async execute(): Promise<void> {
    const node = await this.context.sdk.sdk.Scene.createNode();
    node.name = 'New Model';
    let url = window.prompt('Enter model url', cdnUrl + '/models/arm-chair/2/scene.gltf')
    node.addComponent('mp.gltfLoader', {
      url: url,
      localScale: { x: 1.001, y: 1.001, z: 1.001 },
      localPosition: { x: -0.27, y: -0.51, z: -0.35 },
      localRotation: { x: 0, y: -130, z: 0 },
    });
    node.start();
    this.context.scene.addObject(node);
  }
}

export const makeAddChairFactory = (context: IContext): MenuCommandFactory => {
  return (selection: ISceneNode[]) => {
    return new AddChair(context);
  };
};