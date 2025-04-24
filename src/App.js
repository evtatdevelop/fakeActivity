/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, } from 'react';
import { useDispatch } from "react-redux";
import styles from './App.module.scss';
import { getResourceList, getoutlook, getmainpage, getworkplace, getsap, getresource, getjira} from "./appSlice";
import { getRemote, } from "./features/user/userSlice";
import { getFilePlaceList, getFileResourcesList, } from './features/fileResouce/fileResourceSlice';
import { getServerPlaceList, getServerGroupList, getOperSystemsList, getServerResouceList } from './features/serverResouce/serverResourceSlice';
import { formSubmit } from './appSlice';

function App() {
  const dispatch = useDispatch(); 
  
  const submit = (type_code) => {
    type_code === 'FILE' ? fileSubmit() : serverSubmit();
  }

  const fileSubmit = () => {
    dispatch(formSubmit({
      'resource_type': "FILE",
      "new_or_modify": Math.round(Math.random()) % 2 ? "NEW" : "MODIFY", 
      'file_name': 'test',
      'file_size_gb': '20',
      'description': 'test',
      'file_its80_id': Math.round(Math.random()*100),
      'regular_or_temporary': 'TEMP',
      'temporary_date': '30.04.2025',
      'file_app12_id_resp': '1833',
      'file_resp_need_access': '1',
      'file_users_list': '1833, 1203',
      'comments': 'fileNote',
      'app12_id_boss': '1203',
      'file_path': Math.round(Math.random()*100),
      'file_its81_id': Math.round(Math.random()*100),
    }));
  }

  const serverSubmit = () => {
    dispatch(formSubmit({
      'resource_type': "SERVER",
      "new_or_modify": Math.round(Math.random()) % 2 ? "NEW" : "MODIFY", 
      'serverReason': 'Descreiption',
      'serverPlaceVal': Math.round(Math.random()*100),
      'servType': Math.round(Math.random()) % 2 ? "VIRTUAL" : "HARD",
      'servGroup': Math.round(Math.random()*10),
      'serverOperSystem': 'UBUNTU',
      'serverResManager': 1833,
      'serverName': 'test',
      'servCoresVal': '1',
      'servMemVal': '16',
      'servStorageVal': '32',
      'sorageCommentVal': '50',
      'serverNetsVal': '1',
      'netsCommentVal': 'need',
      'serverPeriodVal': 'TEMP',
      'serverDateVal': '30.04.2025',
      'serverCommentVal': 'test test',
      'serverModRes': Math.round(Math.random()*100),
    }));
  }
  
  useEffect(() => {
    let interval = (Math.round(Math.random()*2)+1) * 100000;  
    console.log(`interval: ${interval}`);
    
    setInterval(() => {
      let date = new Date();
      let time = `${date.getHours()}:${date.getMinutes()}`;
      if ( date.getHours() < 8 || date.getHours() === 12 || date.getHours() > 17 ) console.log('NOWORK');
      else
        if ( Math.round(Math.random()) % 2 ) {
          dispatch(getRemote());
          if ( Math.round(Math.random()) % 2 ) {
            dispatch(getResourceList()); 
            let action = Math.round(Math.random()) % 2 
            let resurce = Math.round(Math.random()) % 2
            if ( resurce )
              if ( action ) dispatch(getFilePlaceList());
              else dispatch(getFileResourcesList());
            else
              if ( action ) {
                dispatch(getServerPlaceList());
                dispatch(getServerGroupList());
                dispatch(getOperSystemsList());
              } else dispatch(getServerResouceList());
            submit(resurce ? 'FILE' : 'SERVER')
            console.log(`${time} ${resurce ? 'FILE' : 'SERVER'} - ${action ? "NEW" : "MODIFY"}`);
          } else console.log(`${time} JUST REMOTE`);
        } else console.log(`${time} WORK`);
    }, interval)

    setInterval(() => window.location.reload(true), 3600 * 1000);
  }, []);

  return (
    <div className={styles.app}>
      Fake Activity
    </div>
  );
}

export default App;
