import React, { Component } from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
     );
  }
}
 
export default Section;

// export default function Section({ title, subtitle, dark, id }) {
//   return (
//     <div className={"section" + (dark ? " section-dark" : "")}>
//       <div className="section-content" id={id}>
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//       </div>
//     </div>
//   );
// }
