
import * as fs from 'fs';
import * as path from 'path';

// Configuration for mapping categories to files and sections
const CONFIG = {
  Buttons: {
    filePath: 'src/components/motionary/atomic/ButtonVariants.tsx',
    pageSectionId: 'buttons',
    importName: 'Buttons'
  },
  Cards: {
    filePath: 'src/components/motionary/atomic/CardVariants.tsx',
    pageSectionId: 'cards',
    importName: 'Cards'
  },
  Text: {
    filePath: 'src/components/motionary/atomic/TextVariants.tsx',
    pageSectionId: 'typography',
    importName: 'Text'
  },
  Nav: {
    filePath: 'src/components/motionary/atomic/NavVariants.tsx',
    pageSectionId: 'navigation',
    importName: 'Nav'
  },
  Backgrounds: {
    filePath: 'src/components/motionary/atomic/BackgroundVariants.tsx',
    pageSectionId: 'backgrounds',
    importName: 'Backgrounds'
  },
  Images: {
    filePath: 'src/components/motionary/atomic/ImageVariants.tsx',
    pageSectionId: 'images',
    importName: 'Images'
  },
  Inputs: {
    filePath: 'src/components/motionary/atomic/InputVariants.tsx',
    pageSectionId: 'inputs',
    importName: 'InputVars'
  },
  Feedback: {
    filePath: 'src/components/motionary/atomic/FeedbackVariants.tsx',
    pageSectionId: 'feedback',
    importName: 'Feedback'
  },
  Loaders: {
    filePath: 'src/components/motionary/atomic/LoaderVariants.tsx',
    pageSectionId: 'loaders',
    importName: 'Loaders'
  },
  Data: {
    filePath: 'src/components/motionary/atomic/DataVariants.tsx',
    pageSectionId: 'data',
    importName: 'Data'
  },
  Ecommerce: {
    filePath: 'src/components/motionary/atomic/EcommerceVariants.tsx',
    pageSectionId: 'ecom',
    importName: 'Ecom'
  },
  Game: {
    filePath: 'src/components/motionary/atomic/GameVariants.tsx',
    pageSectionId: 'game',
    importName: 'Game'
  },
  Media: {
    filePath: 'src/components/motionary/atomic/MediaVariants.tsx',
    pageSectionId: 'media',
    importName: 'Media'
  },
  Device: {
    filePath: 'src/components/motionary/atomic/DeviceVariants.tsx',
    pageSectionId: 'device',
    importName: 'Device'
  },
  Transitions: {
    filePath: 'src/components/motionary/atomic/TransitionVariants.tsx',
    pageSectionId: 'transitions',
    importName: 'Transitions'
  },
  Micro: {
    filePath: 'src/components/motionary/atomic/MicroVariants.tsx',
    pageSectionId: 'micro',
    importName: 'Micro'
  },
  Social: {
    filePath: 'src/components/motionary/atomic/SocialVariants.tsx',
    pageSectionId: 'social',
    importName: 'Social'
  }
};

interface ComponentData {
  name: string;
  code: string;
  promptDescription: string;
  trigger: string;
  styleTags: string[];
}

/**
 * Appends component code to the variant file.
 */
function appendComponentToFile(category: keyof typeof CONFIG, components: ComponentData[]) {
  const config = CONFIG[category];
  const fullPath = path.join(process.cwd(), config.filePath);
  
  let fileContent = fs.readFileSync(fullPath, 'utf-8');
  
  components.forEach(comp => {
    // Check if component already exists to avoid duplicates
    if (fileContent.includes(`export const ${comp.name}`)) {
      console.log(`Skipping ${comp.name} - already exists in ${config.filePath}`);
      return;
    }
    
    const componentCode = `
// ${comp.name}
export const ${comp.name} = () => (
${comp.code}
);
`;
    fileContent += componentCode;
  });

  fs.writeFileSync(fullPath, fileContent);
  console.log(`Appended ${components.length} components to ${config.filePath}`);
}

/**
 * Injects PlaygroundCard entries into page.tsx
 */
function injectIntoPage(category: keyof typeof CONFIG, components: ComponentData[]) {
  const config = CONFIG[category];
  const pagePath = path.join(process.cwd(), 'src/app/page.tsx');
  let pageContent = fs.readFileSync(pagePath, 'utf-8');

  // Find the section start
  // We look for <FilteredSection id="buttons"> ... <ExpandableGrid>
  // A robust regex or substring search is needed.
  // We assume the structure: <FilteredSection id="buttons"> ... <ExpandableGrid> ... </ExpandableGrid>
  
  const sectionStartMarker = `<FilteredSection id="${config.pageSectionId}">`;
  const gridStartMarker = `<ExpandableGrid>`;
  const gridEndMarker = `</ExpandableGrid>`;

  const sectionStartIndex = pageContent.indexOf(sectionStartMarker);
  if (sectionStartIndex === -1) {
    console.error(`Could not find section ${config.pageSectionId} in page.tsx`);
    return;
  }

  // Find the ExpandableGrid closing tag *after* the section start
  const sectionContent = pageContent.slice(sectionStartIndex);
  const gridEndRelativeIndex = sectionContent.indexOf(gridEndMarker);
  
  if (gridEndRelativeIndex === -1) {
    console.error(`Could not find closing </ExpandableGrid> for section ${config.pageSectionId}`);
    return;
  }

  const insertionPoint = sectionStartIndex + gridEndRelativeIndex;

  const newEntries = components.map(comp => {
    // Construct the PlaygroundCard JSX
    // Assuming standard props. Note: codePath is inferred from config.
    // We use the imported namespace e.g. <Buttons.MyButton />
    
    // Clean up code for promptDescription to be single line or escaped properly
    const safePrompt = comp.promptDescription.replace(/"/g, "'").replace(/\n/g, " ");
    const codePath = config.filePath.replace('src/components/motionary/', '').replace('.tsx', '');
    
    return `            <PlaygroundCard styleTags={[${comp.styleTags.map(t => `'${t}'`).join(',')}]} compType="element" promptDescription="${safePrompt}" title="${comp.name.replace(/([A-Z])/g, ' $1').trim()}" trigger="${comp.trigger}" codePath="${codePath}"><${config.importName}.${comp.name} /></PlaygroundCard>`;
  }).join('\n');

  const newPageContent = pageContent.slice(0, insertionPoint) + newEntries + '\n' + pageContent.slice(insertionPoint);
  
  fs.writeFileSync(pagePath, newPageContent);
  console.log(`Injected ${components.length} entries into page.tsx for ${category}`);
}

// Main execution block
// In a real scenario, this would parse args or reading a JSON file.
// For this task, we will expose a function or run it directly with data.

/* Example usage:
const newButtons: ComponentData[] = [
  {
    name: 'TestButton',
    code: '  <button>Test</button>',
    promptDescription: 'A test button',
    trigger: 'Hover',
    styleTags: ['modern']
  }
];
appendComponentToFile('Buttons', newButtons);
injectIntoPage('Buttons', newButtons);
*/

// Export for usage if imported, or allow running via node
export { appendComponentToFile, injectIntoPage, ComponentData };

