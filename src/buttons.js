import React, {useState, useEffect} from 'react';
import {Grid, Switch} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import someClass from './buttons.module.css';
import classname from 'classnames';


const useStyles = makeStyles({

    root: {
         width: '50%'   
    },

    gridButton: {
        
        // height: '6em',
        padding: '2.3em',
        textAlign: 'center',
        marginTop: 'auto', 
        backgroundColor: '#673ab7',
        color: 'white',
        fontWeight: 'bold',
        
    },

    buttomText: {
        backgroundColor: '#ff5722',
        display: 'inline-block',
        width: '5em',
        height: '0.8em',
        padding: '0.5em 4em 1em 4em',
        color: 'white',
        fontSize: '1.1em'
    },

    animation: {
        animation: `$myEffect 200ms`
    },
    "@keyframes myEffect": {
        '0%': {
            backgroundColor: '#673ab7'
        },
        '100%': {
            backgroundColor: '#ff5722'
        }
    }


});


function Buttons () {
    const classes = useStyles();
    const [animationQ, setAnimationQ] = useState(false);
    const [animationW, setAnimationW] = useState(false);
    const [animationE, setAnimationE] = useState(false);
    const [animationA, setAnimationA] = useState(false);
    const [animationS, setAnimationS] = useState(false);
    const [animationD, setAnimationD] = useState(false);
    const [animationZ, setAnimationZ] = useState(false);
    const [animationX, setAnimationX] = useState(false);
    const [animationC, setAnimationC] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [text, setText] = useState('');

    
    useEffect(()=>{
        function handlePlay(event){
            if(event.keyCode === 81){
                let playing = document.getElementById('Q');
                playing.play();
                setText('Heater 1');
                setAnimationQ(true);
               
            }else if(event.keyCode === 87) {
                let playing = document.getElementById('W');
                playing.play();
                setText('Heater 2'); 
                setAnimationW(true);
            }else if(event.keyCode === 69) {
                let playing = document.getElementById('E');
                playing.play();
                setText('Heater 3');
                setAnimationE(true);
            }else if(event.keyCode === 65) {
                let playing = document.getElementById('A');
                playing.play();
                setText('Heater 4');
                setAnimationA(true);
            }else if(event.keyCode === 83) {
                let playing = document.getElementById('S');
                playing.play();
                setText('Clap');
                setAnimationS(true);
            }else if(event.keyCode === 68) {
                let playing = document.getElementById('D');
                playing.play();
                setText('Open HH');
                setAnimationD(true);
            }else if(event.keyCode === 90) {
                let playing = document.getElementById('Z');
                playing.play();
                setText("kick n'Hat");
                setAnimationZ(true);
            }else if(event.keyCode === 88) {
                let playing = document.getElementById('X');
                playing.play();
                setText('kick');
                setAnimationX(true);
            }else if(event.keyCode === 67) {
                let playing = document.getElementById('C');
                playing.play();
                setText('Closed HH');
                setAnimationC(true);
            }
        }

        
        
        window.addEventListener('keydown', handlePlay);
        
        
        return () => {
            window.removeEventListener('keydown', handlePlay);
           
        }

    },[]);


    const handleClickQ = () => {
        let playing = document.getElementById('Q');
        playing.play();
        setText('Heater 1');
        setAnimationQ(true);
        
        
    }

    const handleClickW = () => {
        let playing = document.getElementById('W');
        playing.play();
        setText('Heater 2');
        setAnimationW(true);
    }

    const handleClickE = () => {
        let playing = document.getElementById('E');
        playing.play();
        setText('Heater 3');
        setAnimationE(true);

    }

    const handleClickA = () => {
        let playing = document.getElementById('A');
        playing.play();
        setText('Heater 4');
        setAnimationA(true);
    }

    const handleClickS = () => {
        let playing = document.getElementById('S');
        playing.play();
        setText('Clap');
        setAnimationS(true);

    }

    const handleClickD = () => {
        let playing = document.getElementById('D');
        playing.play();
        setText('Open HH');
        setAnimationD(true);
    }

    const handleClickZ = () => {
        let playing = document.getElementById('Z');
        playing.play();
        setText("kick n'Hat");
        setAnimationZ(true);

    }

    const handleClickX = () => {
        let playing = document.getElementById('X');
        playing.play();
        setText('kick');
        setAnimationX(true);

    }

    const handleClickC = () => {
        let playing = document.getElementById('C');
        playing.play();
        setText('Closed HH');
        setAnimationC(true);
    }

    const handleMute = () => {
        setIsMuted(!isMuted);
        setText('');
    }


    return (
        <>  
            <div>
                <audio id='Q' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'} type="audio/mp3" />
                </audio>
                <audio id='W'  muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'} type="audio/mp3" />
                </audio>
                <audio id='E' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'} type="audio/mp3" />
                </audio>
                <audio id='A' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'} type="audio/mp3" />
                </audio>
                <audio id='S' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'} type="audio/mp3" />
                </audio>
                <audio id='D' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'} type="audio/mp3" />
                </audio>
                <audio id='Z' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'} type="audio/mp3" />
                </audio>
                <audio id='X' muted={isMuted}>
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'} type="audio/mp3" />
                </audio>
                <audio id='C' muted={isMuted}> 
                    <source  src={'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'} type="audio/mp3" />
                </audio>

            </div>
    


            <Grid container spacing={1} style={{width: '55%', margin: 'auto', marginTop: '5%',backgroundColor: '#d7ccc8'}}>
                <Grid item xs={12}>
                    <p className={someClass.head}>DRUM MACHINE</p>
                </Grid>
                <Grid  item xs={4}>
                    <div onAnimationEnd={() => setAnimationQ(false)}   onClick={handleClickQ}  className = {animationQ ? classname(classes.gridButton, classes.animation) : classes.gridButton}  >Q</div>             
                </Grid>

                <Grid  item xs={4}>
                    <div onAnimationEnd={() => setAnimationW(false)} onClick={handleClickW}  className = {animationW ? classname(classes.gridButton, classes.animation) : classes.gridButton}>W</div>     
                </Grid>

                <Grid   item xs={4}>
                    <div onAnimationEnd={() => setAnimationE(false)}onClick={handleClickE} className = {animationE ? classname(classes.gridButton, classes.animation) : classes.gridButton}>E</div>      
                </Grid>
                <Grid item xs={4}>
                    <div onAnimationEnd={() => setAnimationA(false)} onClick={handleClickA} className = {animationA ? classname(classes.gridButton, classes.animation) : classes.gridButton}>A</div>
                </Grid>  

                <Grid item xs={4}>
                    <div onAnimationEnd={() => setAnimationS(false)} onClick={handleClickS} className = {animationS ? classname(classes.gridButton, classes.animation) : classes.gridButton}>S</div>
                </Grid >

                <Grid item xs={4}>   
                    <div onAnimationEnd={() => setAnimationD(false)}  onClick={handleClickD} className = {animationD ? classname(classes.gridButton, classes.animation) : classes.gridButton}>D</div>
                </Grid>

                <Grid item xs={4}>
                    <div onAnimationEnd={() => setAnimationZ(false)} onClick={handleClickZ} className = {animationZ ? classname(classes.gridButton, classes.animation) : classes.gridButton}>Z</div>
                </Grid>                
                
                <Grid item xs={4}>
                    <div onAnimationEnd={() => setAnimationX(false)} onClick={handleClickX} className = {animationX ? classname(classes.gridButton, classes.animation) : classes.gridButton}>X</div>

                </Grid> 
                   
                <Grid item xs={4}>
                    <div onAnimationEnd={() => setAnimationC(false)} onClick={handleClickC} className = {animationC ? classname(classes.gridButton, classes.animation) : classes.gridButton}>C</div>
                </Grid>

                
                <Grid style={{marginTop: '2em'}} item xs={12} >
                    <p className={someClass.power} >POWER<Switch onChange={handleMute} color='primary'/></p>
                    <p className={classes.buttomText}>{text}</p>
                </Grid>
            </Grid>
        </>
    )


}

export default Buttons;
