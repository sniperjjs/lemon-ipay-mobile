import React from 'react'
import { connect } from 'dva'
import styles from './Keyboard.less'
import cs from 'classnames'//引入classnames依赖库
import 'antd-mobile/lib/input-item/style/css'

function Keyboard(props, { number }) {

    function numberClickHandler(el, op) {
        const val = op ? op : el.target.innerText
        const rawNumber = props.options.number
        let newNumber = rawNumber
        let indexDot = rawNumber.indexOf('.')
        switch (val) {
            case 'd':
                newNumber = rawNumber.substring(0, rawNumber.length - 1)
                break
            case 'h':
                break
            case '.':
                if (indexDot < 0) {
                    newNumber = rawNumber + '.'
                    if (rawNumber == '') {
                        newNumber = rawNumber + '0.'
                    }
                }
                break
            default:
                if (indexDot >= 0 && rawNumber.length - indexDot > 2) {
                    break
                }
                newNumber = rawNumber + val
                break
        }
        if (newNumber==""){
            props.changeNumber(newNumber)
        }else if (parseFloat(newNumber)<=props.options.max){
            props.changeNumber(newNumber)
        }
    }
    return (
        <div id="am-number-keyboard-container" >
            <div data-reactroot="" className={cs({ 'am-number-keyboard-wrapper': true })} style={{ "height": "240px" }} >
                <table>
                    <tbody>
                        <tr>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>1</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>2</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>3</a></td>
                            <td onClick={numberClickHandler.bind(this, null, 'd')} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btnD} >
                                <img style={{ "verticalAlign": "middle" }} src={require('../../assets/backspace.png')} /></a></td>
                        </tr>
                        <tr>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>4</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>5</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>6</a></td>
                            <td onClick={e => { props.onClick() }} rowSpan="3"><a className={props.options.uaType=="wx"?styles.btnWX:styles.btnAL}>{props.options.btnName}</a></td>
                        </tr>
                        <tr>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>7</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>8</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>9</a></td>
                        </tr>
                        <tr>
                            <td onClick={numberClickHandler.bind(this, null, 'h')} className={cs({ "am-number-keyboard-item": true, "keyboard-hide": true })}></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>0</a></td>
                            <td onClick={numberClickHandler.bind(this)} className={cs({ 'am-number-keyboard-item': true })}><a className={styles.btn}>.</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connect()(Keyboard)