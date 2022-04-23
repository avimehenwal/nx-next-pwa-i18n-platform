import { Tree, formatFiles, installPackagesTask, logger } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface IGeneratorOptions {
  name: string;
}

export default async function (tree: Tree, schema: IGeneratorOptions) {
  logger.info(`${tree.root}`);
  logger.info(`Hello ${schema.name} attendes!!`);

  // scaffolds new library with 11 NEW files and 2 Updated filesa
  await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return () => {
    // install if any new dependency is added to package.json
    installPackagesTask(tree);
  };
}
