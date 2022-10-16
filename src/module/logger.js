const DEBUG = true;
const VERBOSE = true;
const TIME = true;
// const DEBUG = process.env.REACT_APP_DEBUG;
// const VERBOSE = process.env.REACT_APP_VERBOSE;
// const TIME = process.env.REACT_APP_TIME;

const INFO_COLOR = "lightblue";
const DEBUG_COLOR = "white";
const DEFAULT_COLOR = "unset";

export const Logger = (props) => {
    const { className } = props;
    let _verbose = (...args) => {
        let now = new Date();
        console.log(`${TIME ? now.toISOString() + " " : "" }%c[INFO] ${className}: ${args}%c`, `color: ${INFO_COLOR}`, `color: ${DEFAULT_COLOR}`);
    }
    return {
        debug: (...args) => {
            if(DEBUG === true){
                let now = new Date();
                console.log(`${TIME ? now.toISOString() + " " : "" }%c[DEBUG] ${className}: ${args}%c`, `color: ${DEBUG_COLOR}`, `color: ${DEFAULT_COLOR}`);
            }
        },
        verbose: (...args) => {
            VERBOSE ? _verbose(...args) : null;
        },
        info: (...args) => {
            _verbose(...args);
        }
    }

}