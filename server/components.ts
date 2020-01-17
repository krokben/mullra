import { Store } from "./server";

export interface Component {
  type: string;
  description: string;
}

export function getComponents(store: Store): Component[] {
  return store.components;
}

export function getComponent(store: Store, type: string): Promise<Component> {
  return new Promise((resolve, reject) => {
    const component = store.components.find(item => item.type === type);
    if (component) {
      resolve(component);
      return;
    }
    reject(error => error);
  });
}

export function addComponent(store: Store, component: Component): void {
  store.components.push(component);
}

export function removeComponent(
  store: Store,
  type: string,
): Promise<Component[]> {
  return new Promise((resolve, reject) => {
    const componentIndex = store.components.findIndex(
      component => component.type === type,
    );
    if (componentIndex !== undefined) {
      store.components.splice(componentIndex, 1);
      resolve();
      return;
    }
    reject(error => error);
  });
}

export function updateComponentDescription(
  store: Store,
  type: string,
  description: string,
): Promise<Component[]> {
  return new Promise((resolve, reject) => {
    const componentIndex = store.components.findIndex(
      component => component.type === type,
    );
    if (componentIndex !== undefined) {
      store.components[componentIndex].description = description;
      resolve();
      return;
    }
    reject(error => error);
  });
}
