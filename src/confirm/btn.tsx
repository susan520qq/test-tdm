import { Breadcrumbs} from '@material-ui/core';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{
faDownload,
faPen
} from '@fortawesome/free-solid-svg-icons';
import{ Dropdown} from 'primereact/dropdown';

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
