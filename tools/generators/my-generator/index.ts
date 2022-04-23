import { Tree, formatFiles, installPackagesTask, logger } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface IGeneratorOptions {
  name: string;
}

export default async function (tree: Tree, schema: IGeneratorOptions) {
  logger.info(`Hello ${schema.name} attendes!!`);
  // await libraryGenerator(tree, { name: schema.name });
  // await formatFiles(tree);
  // return () => {
  //   installPackagesTask(tree);
  // };
}
