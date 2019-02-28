

export interface JsonDocs {
  components: JsonDocsComponent[];
  timestamp: string;
  compiler: {
    name: string;
    version: string;
    typescriptVersion: string;
  };
}


export interface JsonDocsComponent {
  dirPath?: string;
  fileName?: string;
  filePath?: string;
  readmePath?: string;
  usagesDir?: string;

  encapsulation: 'shadow' | 'scoped' | 'none';
  tag: string;
  readme: string;
  docs: string;
  docsTags: JsonDocsTag[];
  usage: JsonDocsUsage;
  props: JsonDocsProp[];
  methods: JsonDocsMethod[];
  events: JsonDocsEvent[];
  styles: JsonDocsStyle[];
  slots: JsonDocsSlot[];
}

export interface JsonDocsTag {
  name: string;
  text?: string;
}

export interface JsonDocsUsage {
  [key: string]: string;
}


export interface JsonDocsProp {
  name: string;
  type: string;
  mutable: boolean;
  attr: string | undefined;
  reflectToAttr: boolean;
  docs: string;
  docsTags: JsonDocsTag[];
  default: string;
  deprecation: string | undefined;

  optional: boolean;
  required: boolean;
}


export interface JsonDocsMethod {
  name: string;
  docs: string;
  docsTags: JsonDocsTag[];
  deprecation: string | undefined;
  signature: string;
  returns: JsonDocsMethodReturn;
  parameters: JsonDocMethodParameter[];
}

export interface JsonDocsMethodReturn {
  type?: string;
  docs?: string;
}

export interface JsonDocMethodParameter {
  name?: string;
  type?: string;
  docs?: string;
}

export interface JsonDocsEvent {
  event: string;
  bubbles: boolean;
  cancelable: boolean;
  composed: boolean;
  docs: string;
  docsTags: JsonDocsTag[];
  deprecation: string | undefined;
  detail: string;
}


export interface JsonDocsStyle {
  name: string;
  docs: string;
  annotation: string;
}

export interface JsonDocsSlot {
  name: string;
  docs: string;
}

export interface StyleDoc {
  name: string;
  docs: string;
  annotation: 'prop';
}
