import React, { Component } from 'react'
import { storage } from './firebaseConfig'

export class Up extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "",
            render: "",
        }
    }


    modificouImg = (e) => {
        this.setState({
            img: e.target.files[0]
        })
    }

    subir = () => {

        var ref = storage.ref('candidato/' + this.state.img.name).put(this.state.img);

        ref.on('state_changed',
            function error(err) {
                console.log(err);
            },
            function complete() {
                console.log("ok")
            }
        )
    }


    componentDidMount(){
        var a = storage.ref().child('candidato/Editada2.png').getDownloadURL();
        a.then((result)=>{
            this.setState({
                render: result,
            })
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.render}></img>
                <input type="file" accept="image/jpeg, image/png" onChange={(e) => { this.modificouImg(e) }} />
                <input type="submit" title="upload"></input>
            </div>
        )
    }
}

export default Up
