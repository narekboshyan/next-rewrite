import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import InlineImage from 'editorjs-inline-image';
import InlineCode from '@editorjs/inline-code';
import Link from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';
import Paragraph from 'editorjs-paragraph-with-alignment';
import Header from 'editorjs-header-with-alignment';
import MermaidTool from 'editorjs-mermaid';
import Carousel from './Carousel';
import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
import { uploadToFirebase } from '@/firebase/services/blogs.service';

type Tool = Record<string, ToolConstructable | ToolSettings>;

export function getEditorTools(id: string): Tool {
  return {
    code: Code,
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a Header',
        levels: [1, 2, 3, 4],
        defaultLevel: 1,
      },
    },
    carousel: {
      class: Carousel,
      config: {
        uploader: {
          uploadByFile: (file: any) => uploadToFirebase(file, id),
        },
      },
    },
    paragraph: Paragraph,
    checklist: CheckList,
    embed: Embed,
    image: {
      class: Image,
      config: {
        uploader: {
          uploadByFile: (file: any) => uploadToFirebase(file, id),
        },
      },
    },
    inlineImage: InlineImage,
    // {
    //   class: InlineImage,
    //   inlineToolbar: true,
    //   config: {
    //     // embed: {
    //     //   display: true,
    //     // },
    //     // unsplash: {
    //     //   appName: 'your_app_name',
    //     //   clientId: 'your_client_id'
    //     // }
    //   },
    inlineCode: InlineCode,
    link: Link,
    list: List,
    quote: Quote,
    simpleImage: SimpleImage,
    delimiter: Delimiter,
    mermaid: MermaidTool,
  };
}

export function onReady() {
  MermaidTool.config({ theme: 'neutral' });
}
