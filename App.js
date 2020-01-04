import React, { Component } from 'react'
import { Text, View, StyleSheet, CheckBox, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon, Header, } from 'native-base';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      InputOne: '',
      InputTwo: '',
      InputThree: '',
      CheckBoxOne: true,
      CheckBoxTwo: true,
      CheckBoxThree: true,
      colorOne: '#fff',
      colorTwo: '#fff',
      colorThree: '#fff',
      message: 'Hasil',
      messageColor: '#000',
      result: '0',
    }

  }

  CheckBoxxx = (value, name) => {

    if (name == '1') {
      value ? this.setState({ colorOne: '#fff' }) : this.setState({ colorOne: '#bbb' })
      this.setState({ CheckBoxOne: value }, () => {
        this.setErro()
      })
    }
    if (name == '2') {
      value ? this.setState({ colorTwo: '#fff' }) : this.setState({ colorTwo: '#bbb' })
      this.setState({ CheckBoxTwo: value }, () => {
        this.setErro()
      })
    }
    if (name == '3') {
      value ? this.setState({ colorThree: '#fff' }) : this.setState({ colorThree: '#bbb' })
      this.setState({ CheckBoxThree: value }, () => {
        this.setErro()
      })
    }

  }

  setErro = () => {
    const test = [this.state.CheckBoxOne, this.state.CheckBoxTwo, this.state.CheckBoxThree]
    let count = []
    for (const i of test) {
      if (i == true) {
        count.push(i)
      }
    }

    let cek = count.length
    console.log(cek)
    if (cek <= 1) {
      this.setState({ message: 'cheked one more checkbox', messageColor: '#A8001C', result: '0' })
    } else {
      this.setState({ message: 'Hasil', messageColor: '#000' })
    }
  }

  addition = () => {
    let number = []
    if (this.state.CheckBoxOne) {
      number.push(this.state.InputOne)
    }
    if (this.state.CheckBoxTwo) {
      number.push(this.state.InputTwo)
    }
    if (this.state.CheckBoxThree) {
      number.push(this.state.InputThree)
    }
    let result = 0
    for (const i of number) {
      if (i == '') { continue }
      console.log(i)
      let a = result + Number(i)
      result = a
    }
    this.setState({ result })
  }

  subtraction = () => {
    let number = []
    if (this.state.CheckBoxOne) {
      number.push(this.state.InputOne)
    }
    if (this.state.CheckBoxTwo) {
      number.push(this.state.InputTwo)
    }
    if (this.state.CheckBoxThree) {
      number.push(this.state.InputThree)
    }

    let result = 0
    for (const i of number) {
      if (i == '') { continue }
      if (result == 0) { result = Number(i); continue }
      console.log(i)
      let a = result - Number(i)
      result = a
    }

    this.setState({ result })

  }

  multiplication = () => {
    let number = []
    if (this.state.CheckBoxOne) {
      number.push(this.state.InputOne)
    }
    if (this.state.CheckBoxTwo) {
      number.push(this.state.InputTwo)
    }
    if (this.state.CheckBoxThree) {
      number.push(this.state.InputThree)
    }
    let result = 1
    for (const i of number) {
      if (i == '') { continue }
      let a = result * Number(i)
      result = a
    }
    this.setState({ result })
  }

  division = () => {
    let number = []
    if (this.state.CheckBoxOne) {
      number.push(this.state.InputOne)
    }
    if (this.state.CheckBoxTwo) {
      number.push(this.state.InputTwo)
    }
    if (this.state.CheckBoxThree) {
      number.push(this.state.InputThree)
    }

    let result = 0
    for (const i of number) {
      if (result == 0) { result = Number(i); continue }
      if (i == '') { continue }
      let a = result / parseInt(i)
      result = a
    }

    this.setState({ result })
  }

  render() {
    return (
      <>
        <Header
          androidStatusBarColor='#12161B'
          style={style.Header}>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
            Calculator
          </Text>
        </Header>
        <View style={style.container}>
          <View style={[style.TextInput, { backgroundColor: this.state.colorOne }]}>
            <TextInput
              keyboardType={'numeric'}
              editable={this.state.CheckBoxOne}
              selectTextOnFocus={this.state.CheckBoxOne}
              style={style.text}
              value={this.state.InputOne}
              onChangeText={value => { this.setState({ InputOne: value }) }}
            />
            <CheckBox
              value={this.state.CheckBoxOne}
              onValueChange={(value) => { this.CheckBoxxx(value, '1') }}
            />
          </View>
          <View style={[style.TextInput, { backgroundColor: this.state.colorTwo }]}>
            <TextInput keyboardType={'numeric'}
              editable={this.state.CheckBoxTwo}
              selectTextOnFocus={this.state.CheckBoxTwo}
              style={style.text}
              value={this.state.InputTwo}
              onChangeText={value => { this.setState({ InputTwo: value }) }}
            />
            <CheckBox
              value={this.state.CheckBoxTwo}
              onValueChange={(value) => { this.CheckBoxxx(value, '2') }}
            />
          </View>
          <View style={[style.TextInput, { backgroundColor: this.state.colorThree }]}>
            <TextInput
              keyboardType={'numeric'}
              editable={this.state.CheckBoxThree}
              selectTextOnFocus={this.state.CheckBoxThree}
              style={style.text}
              value={this.state.InputThree}
              onChangeText={value => { this.setState({ InputThree: value }) }}
            />
            <CheckBox
              value={this.state.CheckBoxThree}
              onValueChange={(value) => { this.CheckBoxxx(value, '3') }}
            />
          </View>
          <View style={style.containerHasil}>
            <Text style={style.txtHasil}>{this.state.result}</Text>
            <Text style={{ fontSize: 20, color: this.state.messageColor }}>{this.state.message}</Text>
          </View>
          <View style={style.containerOperator}>
            <TouchableOpacity style={style.operator} onPress={this.addition}>
              <Icon name='plus' type='Entypo' fontSize={20} style={{ color: "#009988" }} />
            </TouchableOpacity>
            <TouchableOpacity style={style.operator} onPress={this.subtraction}>
              <Icon name='minus' type='Entypo' fontSize={20} style={{ color: "#009988" }} />
            </TouchableOpacity>
            <TouchableOpacity style={style.operator} onPress={this.multiplication}>
              <Icon name='md-close' type='Ionicons' fontSize={20} style={{ color: "#009988" }} />
            </TouchableOpacity>
            <TouchableOpacity style={style.operator} onPress={this.division}>
              <Icon name='division' type='MaterialCommunityIcons' fontSize={20} style={{ color: "#009988" }} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  Header: {
    backgroundColor: '#2C3540',
    alignItems: 'center',
  },
  TextInput: {
    backgroundColor: '#fff',
    borderColor: '#313644',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: '#009988',
    width: '80%'
  },
  containerOperator: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  operator: {
    width: 40,
    height: 40,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#313644'
  },
  containerHasil: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    borderTopWidth: 2
  },
  txtHasil: {
    fontSize: 20
  }
})

export default App
