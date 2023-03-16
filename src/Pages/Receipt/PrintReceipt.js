
import React from 'react';
import ReactToPrint from 'react-to-print';

import "./PrintReceipt.css"
import  Receipt from './Receipt';

const PrintReceipt = () => {
    const ref = React.createRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button className="print" >Print this out!</button>}
        content={() => ref.current}
      />
     <div> <Receipt  ref={ref} /></div> 
    </div>
  );
}

export default PrintReceipt