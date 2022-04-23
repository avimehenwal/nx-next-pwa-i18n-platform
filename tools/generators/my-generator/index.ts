import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  logger,
  names,
  Tree,
} from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  logger.info(`${tree.root}`);
  logger.info(`Hello ${schema.title} attendes!!`);

  generateFiles(
    // virtual file system
    tree,

    // the location where the template files are
    joinPathFragments(__dirname, './files'),

    // where the files should be generated
    './articles',

    // the variables to be substituted in the template
    {
      title: schema.title,
      author: schema.author,
      excerpt: schema.excerpt || '',
      normalizedTitle: names(schema.title).fileName,
      creationDate: new Date().toISOString(),
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
