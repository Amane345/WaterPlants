import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import strt from "../../Images/start.png";
import stp from "../../Images/stop.png";
import can from "../../Images/watercan.png";
import plant1 from "../../Images/plant5.png";
import plant2 from "../../Images/plant2.png";
import plant3 from "../../Images/plant3.png";
import plant4 from "../../Images/plant4.png";
import plant5 from "../../Images/plant1.png";
import plant6 from "../../Images/plant6.png";

function LinearProgressWithLabel(props) {
  return (
    <div>
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
    <p>Watering the plants takes 10 secondsand should wait 30 seconds to be able to water it again</p>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
 
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [selected, setSelected]=React.useState();
  const [progress, setProgress] = React.useState(0);
  const [progress1, setProgress1] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const [progress3, setProgress3] = React.useState(0);
  const [progress4, setProgress4] = React.useState(0);
  const [progress5, setProgress5] = React.useState(0);
  const [progress6, setProgress6] = React.useState(0);

  const [waterDec, setWaterDec] = React.useState(100);
  const [waterDec1, setWaterDec1] = React.useState(100);
  const [waterDec2, setWaterDec2] = React.useState(100);
  const [waterDec3, setWaterDec3] = React.useState(100);
  const [waterDec4, setWaterDec4] = React.useState(100);
  const [waterDec5, setWaterDec5] = React.useState(100);
  const [waterDec6, setWaterDec6] = React.useState(100);


 
const handleStart = (event,plantid) =>{
  if(plantid==0){
    setSelected(0);
    const interval1 = setInterval(() => {
      setProgress((progress) => (progress >= 100 ?  waterDec : progress + 10));
    }, 1000);
    const interval2 = setInterval(() => {
      setWaterDec((waterDec) => (waterDec <= 0 ? 0 : waterDec - 10));
    }, 3000);
   
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
     
    };   
  }


if(plantid==1){
  setSelected(1);
  const interval1 = setInterval(() => {
    setProgress1((progress1) => (progress1 >= 100 ?  waterDec1 : progress1 + 10));
  }, 1000);
  const interval2 = setInterval(() => {
    setWaterDec1((waterDec1) => (waterDec1 <= 0 ? 0 : waterDec1 - 10));
  }, 3000);
  const timer = setTimeout(() => {
    window.confirm('please water plant1, it has not been watered for 6 hours')
  }, 21600000);
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearTimeout(timer);
  };   
}

if(plantid==2){
  setSelected(2);
  const interval1 = setInterval(() => {
    setProgress2((progress2) => (progress2 >= 100 ?  waterDec2 : progress2 + 10));
  }, 1000);
  const interval2 = setInterval(() => {
    setWaterDec2((waterDec2) => (waterDec2 <= 0 ? 0 : waterDec2 - 10));
  }, 3000);
  const timer = setTimeout(() => {
    window.confirm('please water plant2, it has not been watered for 6 hours')
  }, 21600000);
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearTimeout(timer);
  };   
}

if(plantid==3){
  setSelected(3);
  const interval1 = setInterval(() => {
    setProgress3((progress3) => (progress3 >= 100 ?  waterDec3 : progress3 + 10));
  }, 1000);
  const interval2 = setInterval(() => {
    setWaterDec3((waterDec3) => (waterDec3 <= 0 ? 0 : waterDec3 - 10));
  }, 3000);
  const timer = setTimeout(() => {
    window.confirm('please water plant3, it has not been watered for 6 hours')
  }, 21600000);
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearTimeout(timer);
  };   
}

if(plantid==4){
  setSelected(4);
  const interval1 = setInterval(() => {
    setProgress4((progress4) => (progress4 >= 100 ?  waterDec4 : progress4 + 10));
  }, 1000);
  const interval2 = setInterval(() => {
    setWaterDec4((waterDec4) => (waterDec4 <= 0 ? 0 : waterDec4 - 10));
  }, 3000);
  const timer = setTimeout(() => {
    window.confirm('please water plant4, it has not been watered for 6 hours')
  }, 21600000);
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearTimeout(timer);
  };   
}

if(plantid==5){
  setSelected(5);
  const interval1 = setInterval(() => {
    setProgress5((progress5) => (progress5 >= 100 ?  waterDec5 : progress5 + 10));
  }, 1000);
  const interval2 = setInterval(() => {
    setWaterDec5((waterDec5) => (waterDec5 <= 0 ? 0 : waterDec5 - 10));
  }, 3000);
  const timer = setTimeout(() => {
    window.confirm('please water plant5, it has not been watered for 6 hours')
  }, 21600000);
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearTimeout(timer);
  };   
}

if(plantid==6){
  setSelected(6);
  const interval1 = setInterval(() => {
    setProgress6((progress6) => (progress6 >= 100 ?  waterDec6 : progress6 + 10));
  }, 1000);
  const interval2 = setInterval(() => {
    setWaterDec6((waterDec6) => (waterDec6 <= 0 ? 0 : waterDec6 - 10));
  }, 3000);
  const timer = setTimeout(() => {
    window.confirm('please water plant6, it has not been watered for 6 hours')
  }, 21600000);
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
    clearTimeout(timer);
  };   
}
};
const handleStop = (event,plantid)=>{

};


  return (
    
     <React.Fragment>
         
        <div className="row feature-box u-margin-bottom-medium">
         <div className="col-1-of-1">
             <h1 className="heading--primary">Welcome </h1>
             
            
                <a onClick={event => handleStart(event,0)}><img src={strt} style={{width:60,height:60}}></img></a>
             
                <a onClick={event => handleStop(event,0)}><img src={stp} style={{width:60,height:60}}></img></a>
             
       </div>
      </div>
         <div className="row">
             <div className="col-1-of-3">
             <div className="feature-box u-center-text ">
             <div className="row">
             <div className="col-1-of-2">
                <a onClick={event => handleStart(event,1)}><img src={strt} style={{width:40,height:40}}></img></a>
             </div>
             <div className="col-1-of-2">
                <a onClick={event => handleStop(event,1)}><img src={stp} style={{width:40,height:40}}></img></a>
             </div>
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <img src={can} style={{width:80,height:80}}></img>
             </div>
             <div className="col-1-of-2">
             </div>
             </div>
             <img src={plant1} style={{width:120,height:150}}></img>
             <p>plant1</p>
             <LinearProgressWithLabel selected={1} value={ selected==1 ? progress1 && waterDec1: progress && waterDec} />
             
             </div>
             </div>



             <div className="col-1-of-3">
             <div className="feature-box u-center-text ">
             <div className="row">
             <div className="col-1-of-2">
                <a onClick={event => handleStart(event,2)}><img src={strt} style={{width:40,height:40}}></img></a>
             </div>
             <div className="col-1-of-2">
                <a onClick={event => handleStop(event,2)}><img src={stp} style={{width:40,height:40}}></img></a>
             </div>
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <img src={can} style={{width:80,height:80}}></img>
             </div>
             <div className="col-1-of-2">
             </div>
             </div>
             <img src={plant2} style={{width:150,height:150}}></img>
             <p>plant2</p>
             <LinearProgressWithLabel selected={2} value={ selected==2 ? progress2 && waterDec2: progress && waterDec} />
             
             </div>
             </div>



             <div className="col-1-of-3">
             <div className="feature-box u-center-text ">
             <div className="row">
             <div className="col-1-of-2">
                <a onClick={event => handleStart(event,3)}><img src={strt} style={{width:40,height:40}}></img></a>
             </div>
             <div className="col-1-of-2">
                <a onClick={event => handleStop(event,3)}><img src={stp} style={{width:40,height:40}}></img></a>
             </div>
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <img src={can} style={{width:80,height:80}}></img>
             </div>
             <div className="col-1-of-2">
             </div>
             </div>
             <img src={plant3} style={{width:150,height:150}}></img>
             <p>plant3</p>
             <LinearProgressWithLabel selected={3} value={ selected==3 ? progress3 && waterDec3: progress && waterDec} />
            
             </div>
             </div>
           </div>


           <div className="row">
             <div className="col-1-of-3">
             <div className="feature-box u-center-text ">
             <div className="row">
             <div className="col-1-of-2">
                <a onClick={event => handleStart(event,4)}><img src={strt} style={{width:40,height:40}}></img></a>
             </div>
             <div className="col-1-of-2">
                <a onClick={event => handleStop(event,4)}><img src={stp} style={{width:40,height:40}}></img></a>
             </div>
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <img src={can} style={{width:80,height:80}}></img>
             </div>
             <div className="col-1-of-2">
             </div>
             </div>
             <img src={plant4} style={{width:220,height:200}}></img>
             <p>plant4</p>
             <LinearProgressWithLabel selected={4} value={ selected==4 ? progress4 && waterDec4: progress && waterDec} />
            
             </div>
             </div>



             <div className="col-1-of-3">
             <div className="feature-box u-center-text ">
             <div className="row">
             <div className="col-1-of-2">
                <a onClick={event => handleStart(event,5)}><img src={strt} style={{width:40,height:40}}></img></a>
             </div>
             <div className="col-1-of-2">
                <a onClick={event => handleStop(event,5)}><img src={stp} style={{width:40,height:40}}></img></a>
             </div>
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <img src={can} style={{width:80,height:80}}></img>
             </div>
             <div className="col-1-of-2">
             </div>
             </div>
             <img src={plant5} style={{width:150,height:200}}></img>
             <p>plant5</p>
             <LinearProgressWithLabel selected={5} value={ selected==5 ? progress5 && waterDec5: progress && waterDec} />
             
             </div>
             </div>



             <div className="col-1-of-3">
             <div className="feature-box u-center-text ">
             <div className="row">
             <div className="col-1-of-2">
                <a onClick={event => handleStart(event,6)}><img src={strt} style={{width:40,height:40}}></img></a>
             </div>
             <div className="col-1-of-2">
                <a onClick={event => handleStop(event,6)}><img src={stp} style={{width:40,height:40}}></img></a>
             </div>
             </div>
             <div className="row">
             <div className="col-1-of-2">
                <img src={can} style={{width:80,height:80}}></img>
             </div>
             <div className="col-1-of-2">
             </div>
             </div>
             <img src={plant6} style={{width:200,height:200}}></img>
             <p>plant6</p>
             <LinearProgressWithLabel selected={6} value={ selected==6 ? progress6 && waterDec6: progress && waterDec} />
            
             </div>
             </div>
           </div>

        </React.Fragment>
  );
}