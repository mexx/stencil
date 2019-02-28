import * as d from '@declarations';
import { MarkdownTable } from './docs-util';

export function propsToMarkdown(props: d.JsonDocsProp[]) {
  const content: string[] = [];
  if (props.length === 0) {
    return content;
  }

  content.push(`## Properties`);
  content.push(``);

  const table = new MarkdownTable();

  table.addHeader([
    'Property',
    'Attribute',
    'Description',
    'Type',
    'Default'
  ]);

  props.forEach(prop => {
    table.addRow([
      getPropertyField(prop),
      getAttributeField(prop),
      getDocsField(prop),
      `\`${prop.type}\``,
      `\`${prop.default}\``
    ]);
  });

  content.push(...table.toMarkdown());
  content.push(``);
  content.push(``);

  return content;
}

function getPropertyField(prop: d.JsonDocsProp) {
  return `\`${prop.name}\`${prop.required ? ' _(required)_' : ''}`;
}

function getAttributeField(prop: d.JsonDocsProp) {
  return prop.attr ? `\`${prop.attr}\`` : '--';
}

function getDocsField(prop: d.JsonDocsProp) {
  return `${prop.deprecation !== undefined
    ? `<span style="color:red">**[DEPRECATED]**</span> ${prop.deprecation}<br/><br/>`
    : ''
  }${prop.docs}`;
}
