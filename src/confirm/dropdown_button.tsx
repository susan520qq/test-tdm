import React,{ useState, useEffect} from 'react';
import { Dropdown} from 'primereact/dropdown';
import Icon from 'styles/img/icon.svg';
import Confirm from 'common/Confirm';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';


const onSave =(defaultSchedule) =>{
if (defaultSchedule){
props.onSave && props.onSave(defaultSchedule);
}
};

const onDelete =() =>{
setIsConfirm(false);
props.onDelete && props.onDelete(selectSchedule);
};

const onDownload =() =>{
const downloadFileName= selectSchedule ||
'myScheduleAllSetting'
const downloadData = scheduleFile.download(selectSchedule);
const objectUrl= URL.createObjectURL(new Blob([JSON.stringify(downloadData)],{type:'data:application/json'}));
exportFile(objectUrl,`${downloadFileName}.json`)
};


const onUpload=(event) =>{
props.onUpload && props.onUpload(event.target.files[0]);
};


return 
  <div className="dropdown">
    <span className="p-float-label'>
                     <Dropdown
                     showClear={true}
                     value={selectSchedule}
                     options={scheduleList}
                     onChange={(e) =>{
                     setSelectSchedule(e.target.value);
                     }}/>
                     <label>choose one</label>
                     </span>
                     </div>


<button className="info size-m move" onClick=
                                    {onDownload}>
                                    <FontAwesomeIcon icon={faDownload}/>
                                    <span>Download</span>
                                    </button>

<input className="" type="file" id="" onChange={onUpload} value="" />

                                                     















