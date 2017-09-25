// renderOther() {
//   return (
//     <div>OTHER!!</div>
//   );
// }

renderData(doc) {
  // debugger;
  if (!doc.children) {
    return <div></div>;
  }

  // const { doc } = this.state;
  const children = doc.children;
  const len = children.length;
  if (len <= 0) return;
  // debugger;

  const jsx = (<div className="html-data-content">
                 {_.times(len, i => (
                    <div key={`${i}`} className="outer">
                      <div key={`tag-${children[i].tagName}-${i}`} className={`${children[i].tagName}`}>{`<${children[i].tagName}>${children[i].content}`}</div>
                      {this.renderData(children[i])}
                      <div key={`tag-${children[i].tagName}-${i}-end`}>{`</${children[i].tagName}>`}</div>

                    </div>
                   )
                 )}
               </div>);
               //  this.renderData(children[i]);
  // debugger;
  // return;

  // for (let i = 0; i < len; i++) {
  //   // const currentTag = children[i].tagName;
  //   //
  //   // tags[currentTag] = tags[currentTag] ? tags[currentTag] + 1 : 1;
  //   //
  //   // this.addTags(children[i], tags);
  // }

  return jsx;
}
