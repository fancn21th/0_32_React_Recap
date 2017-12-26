import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AddType extends React.Component {
    render () {
        return(
            <form onSubmit={this.props.handleAdd}>
                <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" onChange={this.props.handleChange} value={this.props.value}/>
                &nbsp;&nbsp;
                <button type="submit">Add a Todo</button>
            </form>
        )
    }
}

class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',todoList: [],allData: []};
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleCheckBox = this.handleCheckBox.bind(this)
        this.searchAll = this.searchAll.bind(this)
        this.searchComplete =this.searchComplete.bind(this)
        this.searchActive =this.searchActive.bind(this)

    }
    handleAdd(event){
        event.preventDefault();
        var textValue=this.state.value
        if(textValue !==''){
            const oldDatas=this.state.allData;
            var addData=[{'todo':textValue,checked:true}];
            console.info(oldDatas.concat(addData));
            this.setState({
                allData:oldDatas.concat(addData)
            });
            var datas=this.state.allData;
            console.log(datas)
            this.setState({
                todoList: oldDatas.concat(addData)
            });
        }
        this.setState({value:''})
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    searchComplete(){
        var datas=this.state.allData;
        var newDatas = datas.filter(function(item) {
            if(item.checked){
                return item;
            }

        });
        this.setState({todoList:newDatas})
    }
    searchActive(){
        var datas=this.state.allData;
        var newDatas = datas.filter(function(item) {
            if(!item.checked){
                return item;
            }

        });
        this.setState({todoList:newDatas})
    }
    searchAll(){
        var datas=this.state.allData;

        this.setState({todoList:datas})
    }

    handleCheckBox(event){
        var datas=this.state.todoList;
        datas[event.target.value].checked = datas[event.target.value].checked ? false : true;
        this.setState({todoList:datas})
        /*alert(datas[event.target.value].checked);
         //alert(event.target.value);*/
    }
    render(){
        const listTodo =this.state.todoList;
        const datas = listTodo.map((data,i) => {
            return (
                <li key={i}>
                    <label>{data.todo}</label>
                    <input type="checkbox" checked={data.checked} onChange={this.handleCheckBox} value={i}/>
                </li>
            );
        });
       var value=this.state.value;
       var handleChange =this.handleChange;
       var handleAdd =this.handleAdd;
        return(
            <div className="all">
                <div className="add">
                    <AddType handleAdd={handleAdd} handleChange={handleChange} value={value}/>
                </div>
                <div className="datas">
                    <ol>{datas}</ol>
                </div>
                <div className="search">
                   <div>
                        <button onClick={this.searchAll}>All</button>
                        <button onClick={this.searchComplete}>Complete</button>
                        <button onClick={this.searchActive}>Active</button>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <ListTodo />,
    document.getElementById('root')
);
