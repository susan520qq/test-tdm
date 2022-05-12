import React,{useState, useEffect} from 'react';
import { Breadcrumbs} from '@material-ui/core';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
faDownload,
faPen
} from '@fortawesome/free-solid-svg-icons';
import{ Dropdown} from 'primereact/dropdown';
import Icon from 'styles/img/icon.svg';
import Confirm from 'common/Confirm';

useEffect(() => {
  setScheduleList(props.scheduleList.map((file) => ({label:file.name, value: file.key})));
  setDefaultSchedule(props.defaultSchedule);
  setSelectSchedule(props.selectSchedule);
},[props.scheduleList,props.defaultFile]);

const onSave =(defaultSchedule) => {
  if(defaultSchedule){
    props.onSave && props.onSave(defaultSchedule);
  }
};

const onDelete =() =>{
  setIsConfirm(false);
  props.onDelete && props.onDelete(selectSchedule);
};

const onCreate =() =>{
  props.onCreate && props.onCreate();
};

const onUpload =(event) =>{
  props.onUpload && props.onUpload(event.target.files[0]);
};


<Breadcrumbs>
  {[fileName, detailKeyStage].map((name) =>{
  if (detailKeyStage === name){
  return <div key={name} onClick={
              () =>{
  setIsDetail(false);
  fetchTableDate();
  }
  }>{name}</div>;
  }
  return <div key={name}>{name}</div>;
  })}
</Breadcrumbs>
<button onClick={()=>{
  setIsDetail(false);
  fetchTableDate();
  }}>
  <fontAwesomeIcon icon={faMinusSquare}/>
</button>

<div className="dropdown size-m">
  <span className="p-float-label">
  <Dropdown value={fileName} options={props.scheduleList.map((file) => ({
    label: file.name, value: file.key}))}
    onChange={(e) => {
    props.onSelect && props.onSelect(e.value);
    setData([]);
    }}/>
    </span>
    </div>
  
  <button >
    <svg className="btn-icon>
         <use xlinkHref={Icon + '#setting'}></use>
     </svg>
  </button>
                    
  <button className="info" onClick={onCreate}>
                      <svg className="btn-icon">
                        <use xlinkHref={Icon + '#add'}></use>
                        </svg>
                      <span>Add</span>
                    </button>
                    
                    
   <input className="noshow" type='file' id='f-upload' onChange={onUpload} value='' accept='application/JSON' />
     <button className="info fontawesome">
                      <label htmlFor='f-upload'>
                      <FontAwesomeIcon icon={faUpload}/>
                      <span>upload</span>
                      </label>
                    </button>                
                    
