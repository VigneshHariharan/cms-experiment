import { useEffect, useState } from 'react';

export const writerSchema = {
  order: ["id-1","id-2"],
  contents: {
    "id-1": {
      type: "h1",
      content: "Greater content takes time",
    },
    "id-2": {
      type: "p",
      content: "do so do Greater content takes time",
    },
  },
};

const componentMap = {
  h1: function (content, id, onKeyDown, index) {
    return (
      <h1
        className="text-4xl"
        contentEditable="true"
        suppressContentEditableWarning
        onKeyDown={(event) => {
           // this.content = event.target.value;
        }}
        key={id}
      >
        {content}
      </h1>
    );
  },
  p: function (defaultContent, id, onKeyDown, index) {
    return (
      <p
        className="text-base"
        role="textbox"
        contentEditable="true"
        data-component-id={id}
        onKeyDown={(event) => {

          if(event.key === 'Enter') {
            event.preventDefault();
          }
        //   this.content = event.target.value;
        }}
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: defaultContent }}
        key={id}
      ></p>
    );
  },
};

export const contentRenderer = (defaultSchema) => {
    const [componentsToRender, setComponentsToRender ] = useState([]);

    const [schema, setSchema] = useState(defaultSchema);

    useEffect(() => {
      let components = [];
      const { order, contents } = schema
      order.forEach((id, index) => {
        const block = contents[id];
        components.push(
          componentMap[block.type](block.content, id, block.onKeyDown, index)
        );
      });

      setComponentsToRender(components);
    }, [schema]);
    
    const createBlock = (currentComponentId) => {
      const newId = Math.random() * 1000;

      const newContent = {
        id: newId,
        type: 'p'
      };


      const newComponents = { ...schema };
      newComponents.contents[newId] = newContent;

      const componentIndex = newComponents.order.indexOf(currentComponentId);
      newComponents.order.splice(componentIndex, 0, newId)
      setSchema(newComponents);
    }

    const deleteBlock = (currentComponentId) => {


      const newComponents = { ...schema };
      delete newComponents.contents[currentComponentId];

      const componentIndex = newComponents.order.indexOf(currentComponentId);
      newComponents.order.splice(componentIndex, 1)
      setSchema(newComponents)
    }

    return <div
    onKeyDown={(event) => {
      const dataComponentId = event.target.dataComponentId
      if(event.key === 'Enter') {
        console.log('create new block',{d: event.target})
        if(event.target) {
          createBlock(dataComponentId)
        }

      }

      if(event.key === "Backspace" || event.key === "Delete") {
        if(event.target.content === '') {
          deleteBlock(dataComponentId)
        }
      }
    }}
    >{componentsToRender}</div>;
}

