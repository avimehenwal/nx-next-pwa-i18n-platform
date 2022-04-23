import {
  Tree,
  formatFiles,
  installPackagesTask,
  logger,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface IGeneratorOptions {
  name: string;
}

export default async function (tree: Tree, schema: IGeneratorOptions) {
  logger.info(`${tree.root}`);
  logger.info(`Hello ${schema.name} attendes!!`);

  generateFiles(
    // virtual file system
    tree,

    // the location where the template files are
    joinPathFragments(__dirname, './files'),

    // where the files should be generated
    './articles',

    // the variables to be substituted in the template
    {
      name: schema.name,
      normalizedName: schema.name,
      // excerpt: schema.excerpt || '',
      // creationDate: new Date().toISOString(),
    }
  );

  await formatFiles(tree);

  // scaffolds new library with 11 NEW files and 2 Updated filesa
  // await libraryGenerator(tree, { name: schema.name });
  // await formatFiles(tree);
  // return () => {
  // install if any new dependency is added to package.json
  // installPackagesTask(tree);
  // };
}
