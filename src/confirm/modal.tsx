import React from 'react';
import Icon from 'styles/img/icon.svg';


interface ConfirmProps{
  open?:boolean;
  title?: string;
  content?: string | React.ReactNode;
  action?: React.ReactNode;
  childrens?: React.ReactNode;
  onConfirm?:(evt?) => void;
  onCancel?:(evt?) => void;
}

const Confirm = (props: ConfirmProps) =>{
  let content: React.ReactNode | null = null;
  if(props.childrens){
  content = props.childrens;
}else if(props.content){
content= props.content;
}

let action: React.ReactNode | null = null;
if(props.action){
action=props.action;
}else{
action=(
<div className="buttonGroup size-m">
  <button className="info size-m move nobg" onClick={props.onCancel}>
    <svg className="btn-icon">
      <use xlinkHref={Icon+ '#cancel'}></use>
    </svg>
    <span>NO</span>
  </button>
  <button className="danger size-m move" onClick={props.onConfirm}>
    <svg className="btn-icon">
      <use xlinkHref={Icon+ '#ok'}></use>
    </svg>
    <span>Yes</span>
  </button>
</div>
);
}

if (props.open){
return(
<div className='confirmdialog warning">
                <div className="modal">
                <div className="modal-header no">
                {props.title}
                </div>
                <div className="modal-content">
                <span className="alert-icon">
                <svg>
                <use xlinkHref={Icon + '#exclamation'}></use>
                                                     </svg>
                                                     </span>
                                                     <span>{content}</span>
                                                     </div>
                                                     <div className="modal-footer">
                                                     {action}
                                                     </div>
                                                     </div>
                                                     </div>
                                                     );
                                                     }
                                                     
                                                     return<></>;
                                                     };
                                                     export default Confirm;
                                                     
















