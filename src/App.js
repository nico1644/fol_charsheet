import React, {Component}from 'react';
import {Table, Checkbox, Button, Grid, Image, Input, Label,
  Segment, Dropdown, Popup, Form, TextArea, Modal, Message} from "semantic-ui-react"

import './App.css';
import Logo from "./logo.png"
import Orders from "./orders.js"
import {Weapons, Armor, Animals, Levels} from "./items.js"

const statbonus = [
    {value: 1, bonus: -2},
    {value:2, bonus: -2},
    {value:3, bonus: -2},
    {value:4, bonus:-2},
    {value:5, bonus:-1},
    {value:6, bonus:-1},
    {value:7, bonus:0},
    {value:8, bonus:0},
    {value:9, bonus:1},
    {value:10, bonus:1},
    {value:11, bonus:1},
    {value:12, bonus:2},
    {value:13, bonus:2},
    {value:14, bonus:2},
    {value:15, bonus:2},
    {value:16, bonus:3},
    {value:17, bonus:4},
    {value:18, bonus:4}
  ]

class CharSheet extends Component {

  state = {
    newchar: false,
    newmodal: false,
    char_name: "",
    pickedorder: "",
    ordername: "",
    level: "lvl1",
    skills: "<br>",
    str_val: 7,
    str_bn: 0,
    str_bff: false,
    str_dbf: false,
    int_val: 7,
    int_bn: 0,
    int_bff: false,
    int_dbf: false,
    chr_val: 7,
    chr_bn: 0,
    chr_bff: false,
    chr_dbf: false,
    arc_val: 7,
    arc_bn: 0,
    arc_bff: false,
    arc_dbf: false,
    grc_val: 7,
    grc_bn: 0,
    grc_bff: false,
    grc_dbf: false,
    def_val: 0,
    def_bff: false,
    def_dbf: false,
    maxhealth: 0,
    curhealth: 0,
    temphealth: 0,
    bio: "",
    res: "",
    items: "",
    adv: "",
    weaps: [],
    armor: "",
    anim: "",
    lev: "LEVEL 1",
    arcnt: 0,
    gold: 0,
  }

  render() {

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Modal open={this.state.newmodal} actions={{positive:true}}
              trigger={<Button disabled={this.state.newchar} color="violet" onClick={()=>
                this.setState({newmodal:true})
              }>
              New Character
              </Button>} basic size="small">
              <Modal.Header>
                Input your name, stats and pick your order. When done click FINISHED!
              </Modal.Header>
              <Modal.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={2}>
                      <Modal trigger={<Button size="big" color="yellow">ORDERS</Button>}>
                        <Modal.Content scrolling>
                          <Table celled>
                            <Table.Header>
                              <Table.Row>
                                <Table.HeaderCell width={3}>Order Name</Table.HeaderCell>
                                <Table.HeaderCell width={5}>The Order</Table.HeaderCell>
                                <Table.HeaderCell width={5}>Details</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Skills</Table.HeaderCell>
                              </Table.Row>
                            </Table.Header>
                            <Table.Body>
                              {Orders.map(ord => {
                                return (
                                  <Table.Row>
                                    <Table.Cell>
                                      {ord.value}
                                    </Table.Cell>
                                    <Table.Cell>
                                      {ord.abtclss}
                                    </Table.Cell>
                                    <Table.Cell >
                                      <div dangerouslySetInnerHTML={{__html:ord.deets}}></div>
                                    </Table.Cell>
                                    <Table.Cell >
                                      <Modal trigger={<Button color="orange">Skills</Button>}>
                                        <Modal.Content scrolling>
                                          <Table celled>
                                            <Table.Header>
                                              <Table.HeaderCell>Level</Table.HeaderCell>
                                              <Table.HeaderCell>Details</Table.HeaderCell>
                                            </Table.Header>
                                            <Table.Body>
                                              <Table.Row>
                                                <Table.Cell>
                                                  1
                                                </Table.Cell>
                                                <Table.Cell>
                                                  <div dangerouslySetInnerHTML={{__html:ord.lvl1}}/>
                                                </Table.Cell>
                                              </Table.Row>
                                              <Table.Row>
                                                <Table.Cell>
                                                  2
                                                </Table.Cell>
                                                <Table.Cell>
                                                  <div dangerouslySetInnerHTML={{__html:ord.lvl2}}/>
                                                </Table.Cell>
                                              </Table.Row>
                                              <Table.Row>
                                                <Table.Cell>
                                                  3
                                                </Table.Cell>
                                                <Table.Cell>
                                                  <div dangerouslySetInnerHTML={{__html:ord.lvl3}}/>
                                                </Table.Cell>
                                              </Table.Row>
                                              <Table.Row>
                                                <Table.Cell>
                                                  4
                                                </Table.Cell>
                                                <Table.Cell>
                                                  <div dangerouslySetInnerHTML={{__html:ord.lvl4}}/>
                                                </Table.Cell>
                                              </Table.Row>
                                              <Table.Row>
                                                <Table.Cell>
                                                  5
                                                </Table.Cell>
                                                <Table.Cell>
                                                  <div dangerouslySetInnerHTML={{__html:ord.lvl5}}/>
                                                </Table.Cell>
                                              </Table.Row>
                                            </Table.Body>
                                          </Table>
                                        </Modal.Content>
                                      </Modal>
                                    </Table.Cell>
                                  </Table.Row>
                                )}
                              )}
                            </Table.Body>
                          </Table>
                        </Modal.Content>
                      </Modal>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <label htmlFor="STR">CHARACTER'S NAME</label>
                      <div></div>
                      <Input style={{maxWidth:"100%", width:"100%"}} onChange={(e) =>
                        {
                          const val = e.target.value
                          this.setState({char_name:val})
                        }
                      }/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <label htmlFor="STR">STRENGTH</label>
                      <div></div>
                      <Input id="STR" className="STR stt" onChange={(e) =>
                        {
                          const val = Number(e.target.value)
                          const newbn = statbonus.filter(statbonus => statbonus.value == val)[0].bonus
                          this.setState({str_val:val, str_bn:newbn})
                        }
                      }/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <label htmlFor="INT">INTELLIGENCE</label>
                      <div></div>
                      <Input id="INT" className="INT stt" onChange={(e) =>
                        {
                          const val = Number(e.target.value)
                          const newbn = statbonus.filter(statbonus => statbonus.value == val)[0].bonus
                          this.setState({int_val:val, int_bn:newbn})
                        }
                      }/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <label htmlFor="CHR">CHARM</label>
                      <div></div>
                      <Input id="CHR" className="CHR stt" onChange={(e) =>
                        {
                          const val = Number(e.target.value)
                          const newbn = statbonus.filter(statbonus => statbonus.value == val)[0].bonus
                          this.setState({chr_val:val, chr_bn:newbn})
                        }
                      }/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <label htmlFor="ARC">ARCANA</label>
                      <div></div>
                      <Input id="ARC" className="ARC stt" onChange={(e) =>
                        {
                          const val = Number(e.target.value)
                          const newbn = statbonus.filter(statbonus => statbonus.value == val)[0].bonus
                          this.setState({arc_val:val, arc_bn:newbn})
                        }
                      }/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <label htmlFor="GRC">GRACE</label>
                      <div></div>
                      <Input id="GRC" className="GRC stt" onChange={(e) =>
                        {
                          const val = Number(e.target.value)
                          const newbn = statbonus.filter(statbonus => statbonus.value == val)[0].bonus
                          this.setState({grc_val:val, grc_bn:newbn})
                        }
                      }/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <label htmlFor="hp">HEALTH</label>
                      <div></div>
                      <Input id="hp" className="hp stt" onChange={(e) =>
                        this.setState({maxhealth:Number(e.target.value),
                                       curhealth:Number(e.target.value)})
                      }/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={8}>
                    <Form>
                      <Dropdown disabled={this.state.newchar}
                        className="orders name" placeholder="Choose your Order"
                        fluid selection options={Orders} onChange= {(e, data) =>
                          {
                            const ord = data.value
                            const ordr = Orders.filter(o => o.value === ord)[0].key
                            this.setState({pickedorder:ordr})
                          }
                      }/>
                      <label htmlFor="orders" style={{display:"none"}}>Choose your Order</label>
                    </Form>
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Button  disabled={this.state.newchar} color="green" onClick={()=>
                        {
                          if(this.state.pickedorder===""){

                          } else {
                            this.setState({newchar:true, newmodal:false})
                            let ordr = this.state.pickedorder
                            let lvl = this.state.level
                            let order = Orders.filter(o => o.key == ordr)[0]
                            if(order.strbn===true){
                              let strval = this.state.str_val + order.strval
                              let strbn = statbonus.filter(statbonus =>
                                statbonus.value == strval)[0].bonus
                              this.setState({str_val: strval, str_bn: strbn})
                            }
                            if(order.intbn===true){
                              let intval = this.state.int_val + order.intval
                              let intbn = statbonus.filter(statbonus =>
                                statbonus.value == intval)[0].bonus
                              this.setState({int_val: intval, int_bn: intbn})
                            }
                            if(order.chrbn===true){
                              let chrval = this.state.chr_val + order.chrval
                              let chrbn = statbonus.filter(statbonus =>
                                statbonus.value == chrval)[0].bonus
                              this.setState({chr_val: chrval, chr_bn: chrbn})
                            }
                            if(order.arcbn===true){
                              let arcval = this.state.arc_val + order.arcval
                              let arcbn = statbonus.filter(statbonus =>
                                statbonus.value == arcval)[0].bonus
                              this.setState({arc_val: arcval, arc_bn: arcbn})
                            }
                            if(order.grcbn===true){
                              let grcval = this.state.grc_val + order.grcval
                              let grcbn = statbonus.filter(statbonus =>
                                statbonus.value == grcval)[0].bonus
                              this.setState({grc_val: grcval, str_bn: grcbn})
                            }
                            this.setState({ordername: order.value, def_val: order.def,
                                           maxhealth:(this.state.maxhealth + order.hp),
                                           curhealth:(this.state.curhealth + order.hp)
                                         })
                            const lvl1 = order.lvl1
                            const lvl2 = order.lvl2
                            const lvl3 = order.lvl3
                            const lvl4 = order.lvl4
                            const lvl5 = order.lvl5
                            if(lvl==="lvl1"){
                              this.setState({skills:lvl1})
                            } else if(lvl==="lvl2"){
                              this.setState({skills:(lvl1+lvl2)})
                            } else if(lvl==="lvl3"){
                              this.setState({skills:(lvl1+lvl2+lvl3)})
                            } else if(lvl==="lvl4"){
                              this.setState({skills:(lvl1+lvl2+lvl3+lvl4)})
                            } else if(lvl==="lvl5"){
                              this.setState({skills:(lvl1+lvl2+lvl3+lvl4+lvl5)})
                            }
                          }
                        }
                      }>
                        FINISHED
                      </Button>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Button color="red" onClick={()=>this.setState({newmodal:false})}>
                        RETURN
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column width={2}>
            <Modal trigger={<Button color="teal">Edit Character</Button>}>
              <Modal.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <Input fluid className="charsname" onChange={(e) =>
                        {
                          const val = e.target.value
                          this.setState({char_name:val})
                        }
                      } placeholder="Character's Name"/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Input label="Add to Max HP" id="hp" className="hp stt" action={{
                        icon:"check",
                        color:"green",
                        onClick: () => this.setState({maxhealth:
                                                      this.state.maxhealth + this.state.temphealth})
                      }} onChange={(e) => this.setState({temphealth:Number(e.target.value)})}>
                      </Input>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Button color="red">Delete Character</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column width={2}>
            <Modal trigger={<Button color="green">Load Character</Button>}>
            </Modal>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button onClick={() => console.log(this.state)}>Check State</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={3} className="octagon">
            <Image src={Logo}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment style={{padding:"0", height: "35%"}} className="octagon">
              <div className="name octagon">{this.state.char_name}</div>
              <label htmlFor="charname"style={{display:"none"}}>Character's Name</label>
            </Segment>
            <Segment style={{
              background:"#cd2028",
              border:"none",
              boxShadow: "none",
              height:"10%",
              margin: "0",
              padding: "0"}}>
                <div style={{display:"none"}}></div>
            </Segment>
            <Segment style={{marginTop:"10px", height: "35%", padding:"0"}}>
              <div className="octagon" style={{height:"100%"}}>
              {this.state.ordername}
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <div className="octagon" style={{fontSize: 20, paddingTop:2}}>
              Current Health
              <Segment style={{margin:0, boxShadow:"none", border: "none", padding: 0,
                               fontSize: 35, paddingTop:13, paddingBottom:30, paddingLeft: 15}}>
                  <div className="curhealth">
                    {this.state.curhealth}
                  </div>
                  <Button floated="right" positive icon="caret up" size="mini"
                      style={{marginRight:10}} onClick={() =>
                        this.setState({curhealth: this.state.curhealth + 1})
                      }>
                   </Button>
              </Segment>
                <Popup content="To change the Max Health go to Edit Character" trigger=
                  {<div>Max Health</div>}/>
              <Segment style={{margin:0, boxShadow:"none", border: "none", padding: 0,
                               fontSize: 35, paddingTop:10, paddingBottom:30, paddingLeft: 15}}>
                 <div className="maxhealth">
                   {this.state.maxhealth}
                 </div>
                 <Button floated="right" negative icon="caret down" size="mini"
                    style={{marginRight:10}} onClick={() =>
                      this.setState({curhealth: this.state.curhealth -1})
                    }>
                 </Button>
             </Segment>
            </div>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center">
            <div className="octagon stats strstat">
              <div>STR</div>
              <Popup content={this.state.str_val} position="right center" trigger={
                <div className="statval strval">{this.state.str_bn}</div>}/>
              <div>
                <Popup content=
                  "Meal Buff: Not cutting corners eating that Wendy's Cheeseburger (+1 to STR stat)"
                  trigger={<Checkbox toggle checked={this.state.str_bff} onChange={() =>
                  {
                    const checked = this.state.str_bff
                    if(checked===false){
                      const newbn = statbonus.filter(statbonus =>
                        statbonus.value == (this.state.str_val+1))[0].bonus
                      this.setState({str_val: (this.state.str_val + 1), str_bff:true, str_bn:newbn})
                    } if(checked===true){
                      const newbn = statbonus.filter(statbonus =>
                        statbonus.value == (this.state.str_val-1))[0].bonus
                      this.setState({str_val: (this.state.str_val - 1), str_bff:false, str_bn:newbn})
                    }
                  }}/>
                }/>
                <Popup content="Meal Debuff: Oh no! You ate a Sub (-2 to STR bonus)"
                  trigger={<Checkbox toggle checked={this.state.str_dbf} onChange={() =>
                  {
                    const checked = this.state.str_dbf
                    if(checked===false){
                      this.setState({str_dbf:true, str_bn:(this.state.str_bn-2)})
                    } if(checked===true){
                      this.setState({str_dbf:false, str_bn:(this.state.str_bn+2)})
                    }
                  }}/>
                }/>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center">
            <div className="octagon stats">
              <div>INT</div>
              <Popup content={this.state.int_val} position="right center" trigger={
                <div className="statval strval">{this.state.int_bn}</div>}/>
              <div>
                <Popup content="Meal Buff: Yum! Wendy's French Fries! (+1 to INT stat)"
                  trigger={<Checkbox toggle checked={this.state.int_bff} onChange={() =>
                  {
                    const checked = this.state.int_bff
                    if(checked===false){
                      const newbn = statbonus.filter(statbonus =>
                        statbonus.value == (this.state.int_val+1))[0].bonus
                      this.setState({int_val: (this.state.int_val + 1), int_bff:true, int_bn:newbn})
                    } if(checked===true){
                      const newbn = statbonus.filter(statbonus =>
                        statbonus.value == (this.state.int_val-1))[0].bonus
                      this.setState({int_val: (this.state.int_val - 1), int_bff:false, int_bn:newbn})
                    }
                  }}/>
                }/>
                <Popup content="Meal Debuff: So you went to the gas station... (-2 to INT bonus)"
                  trigger={<Checkbox toggle checked={this.state.int_dbf} onChange={() =>
                  {
                    const checked = this.state.int_dbf
                    if(checked===false){
                      this.setState({int_dbf:true, int_bn:(this.state.int_bn-2)})
                    } if(checked===true){
                      this.setState({int_dbf:false, int_bn:(this.state.int_bn+2)})
                    }
                  }}/>
                }/>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center">
          <div className="octagon stats">
            <div>CHR</div>
            <Popup content={this.state.chr_val} position="right center" trigger={
              <div className="statval strval">{this.state.chr_bn}</div>}/>
            <div>
              <Popup content="Meal Buff: Brrr a Wendy's Frosty! (+1 to CHR stat)"
                trigger={<Checkbox toggle checked={this.state.chr_bff} onChange={() =>
                {
                  const checked = this.state.chr_bff
                  if(checked===false){
                    const newbn = statbonus.filter(statbonus =>
                      statbonus.value == (this.state.chr_val+1))[0].bonus
                    this.setState({chr_val: (this.state.chr_val + 1), chr_bff:true, chr_bn:newbn})
                  } if(checked===true){
                    const newbn = statbonus.filter(statbonus =>
                      statbonus.value == (this.state.chr_val-1))[0].bonus
                    this.setState({chr_val: (this.state.chr_val - 1), chr_bff:false, chr_bn:newbn})
                  }
                }}/>
              }/>
              <Popup content="Meal Debuff: Fell for the italian pie huh? (-2 to CHR bonus)"
                trigger={<Checkbox toggle checked={this.state.chr_dbf} onChange={() =>
                {
                  const checked = this.state.chr_dbf
                  if(checked===false){
                    this.setState({chr_dbf:true, chr_bn:(this.state.chr_bn-2)})
                  } if(checked===true){
                    this.setState({chr_dbf:false, chr_bn:(this.state.chr_bn+2)})
                  }
                }}/>
              }/>
            </div>
          </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center">
          <div className="octagon stats">
            <div>ARC</div>
            <Popup content={this.state.arc_val} position="right center" trigger={
              <div className="statval strval">{this.state.arc_bn}</div>}/>
            <div>
              <Popup content="Meal Buff: Got them Wendy's chick chick! (+1 to ARC stat)"
                trigger={<Checkbox toggle checked={this.state.arc_bff} onChange={() =>
                {
                  const checked = this.state.arc_bff
                  if(checked===false){
                    const newbn = statbonus.filter(statbonus =>
                      statbonus.value == (this.state.arc_val+1))[0].bonus
                    this.setState({arc_val: (this.state.arc_val + 1), arc_bff:true, arc_bn:newbn})
                  } if(checked===true){
                    const newbn = statbonus.filter(statbonus =>
                      statbonus.value == (this.state.arc_val-1))[0].bonus
                    this.setState({arc_val: (this.state.arc_val - 1), arc_bff:false, arc_bn:newbn})
                  }
                }}/>
              }/>
              <Popup content="Meal Debuff: Te comiste unos tacos?!?! (-2 to ARC bonus)"
                trigger={<Checkbox toggle checked={this.state.arc_dbf} onChange={() =>
                {
                  const checked = this.state.arc_dbf
                  if(checked===false){
                    this.setState({arc_dbf:true, arc_bn:(this.state.arc_bn-2)})
                  } if(checked===true){
                    this.setState({arc_dbf:false, arc_bn:(this.state.arc_bn+2)})
                  }
                }}/>
              }/>
            </div>
          </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center">
          <div className="octagon stats">
            <div>GRC</div>
            <Popup content={this.state.grc_val} position="right center" trigger={
              <div className="statval strval">{this.state.grc_bn}</div>}/>
            <div>
              <Popup content="Meal Buff: Refreshed with a Wendy's drink! (+1 to GRC stat)"
                trigger={<Checkbox toggle checked={this.state.grc_bff} onChange={() =>
                {
                  const checked = this.state.grc_bff
                  if(checked===false){
                    const newbn = statbonus.filter(statbonus =>
                      statbonus.value == (this.state.grc_val+1))[0].bonus
                    this.setState({grc_val: (this.state.grc_val + 1), grc_bff:true, grc_bn:newbn})
                  } if(checked===true){
                    const newbn = statbonus.filter(statbonus =>
                      statbonus.value == (this.state.grc_val-1))[0].bonus
                    this.setState({grc_val: (this.state.grc_val - 1), grc_bff:false, grc_bn:newbn})
                  }
                }}/>
              }/>
              <Popup content="Meal Debuff: Snacks.. Snacks... Snacks.. (-2 to GRC bonus)"
                trigger={<Checkbox toggle checked={this.state.grc_dbf} onChange={() =>
                {
                  const checked = this.state.grc_dbf
                  if(checked===false){
                    this.setState({grc_dbf:true, grc_bn:(this.state.grc_bn-2)})
                  } if(checked===true){
                    this.setState({grc_dbf:false, grc_bn:(this.state.grc_bn+2)})
                  }
                }}/>
              }/>
            </div>
          </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center">
          <div className="octagon stats">
            <div>DEF</div>
            <div className="statval">{this.state.def_val}</div>
            <div>
              <Popup content="Meal Buff: Healthy eating!!! Wendy's Salad (+1 to DEF stat)"
                trigger={<Checkbox toggle checked={this.state.def_bff} onChange={() =>
                {
                  const checked = this.state.def_bff
                  if(checked===false){
                    this.setState({def_val: (this.state.def_val + 1), def_bff:true})
                  } if(checked===true){
                    this.setState({def_val: (this.state.def_val - 1), def_bff:false})
                  }
                }}/>
              }/>
              <Popup content="Meal Debuff: [Insert Fried Chicken quirp] (-1 to DEF stat)"
                trigger={<Checkbox toggle checked={this.state.def_dbf} onChange={() =>
                {
                  const checked = this.state.def_dbf
                  if(checked===false){
                    this.setState({def_dbf:true, def_val:(this.state.def_val-1)})
                  } if(checked===true){
                    this.setState({def_dbf:false, def_val:(this.state.def_val+1)})
                  }
                }}/>
              }/>
            </div>
          </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="center" verticalAlign="middle">
          <div className="octagon stats levels">
            <Dropdown
              className="level" placeholder="LEVEL 1"
              fluid selection options={Levels} text={this.state.lev} onChange={(e,data) =>
                {
                  const lvl = data.value
                  const levs = e.target.textContent
                  if(this.state.pickedorder===""){
                    this.setState({skills:"Must Pick Order"})
                  } else {
                    let ordr = this.state.pickedorder
                    const skill = Orders.filter(Orders => Orders.key === ordr)[0]
                    const lvl1 = skill.lvl1
                    const lvl2 = skill.lvl2
                    const lvl3 = skill.lvl3
                    const lvl4 = skill.lvl4
                    const lvl5 = skill.lvl5
                    this.setState({level:lvl, lev:levs})
                    if(lvl==="lvl1"){
                      this.setState({skills:lvl1})
                    } else if(lvl==="lvl2"){
                      this.setState({skills:(lvl1+lvl2)})
                    } else if(lvl==="lvl3"){
                      this.setState({skills:(lvl1+lvl2+lvl3)})
                    } else if(lvl==="lvl4"){
                      this.setState({skills:(lvl1+lvl2+lvl3+lvl4)})
                    } else if(lvl==="lvl5"){
                      this.setState({skills:(lvl1+lvl2+lvl3+lvl4+lvl5)})
                    }
                  }
                }
              }>
          </Dropdown>
          </div>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment className="topheader">
              <div className="octagon">Bio</div>
            </Segment>
            <Segment className="bottomfield">
              <div className="octagon">
                <Form>
                  <TextArea placeholder="Character's backstory..."
                    style={{minHeight:500}} onChange={(e) =>
                      this.setState({bio:e.target.value})
                    }/>
                </Form>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment className="topheader">
              <div className="octagon">Load</div>
            </Segment>
            <Segment className="bottomfield">
              <div className="octagon">
                <Modal trigger={<Button color="blue">Weapons</Button>} size="small" closeIcon>
                  <Modal.Content scrolling>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Weapon</Table.HeaderCell>
                          <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {Weapons.map(weap => {
                          return (
                            <Table.Row>
                              <Table.Cell>
                                {weap.value}
                              </Table.Cell>
                              <Table.Cell>
                                {weap.details}
                              </Table.Cell>
                            </Table.Row>
                          )}
                        )}
                      </Table.Body>
                    </Table>
                  </Modal.Content>
                </Modal>
                <Dropdown
                  className="weaps" placeholder="-Add-"
                  fluid multiple selection clearable options={Weapons} onChange={(e,data) =>
                  {
                    this.setState({weaps:data.value})

                  }}
                />
                <Modal trigger={<Button color="blue">Armor</Button>} basic size="small" closeIcon>
                  <Modal.Content scrolling>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Armor</Table.HeaderCell>
                          <Table.HeaderCell>Type</Table.HeaderCell>
                          <Table.HeaderCell>Protection</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {Armor.map(ar => {
                          return (
                            <Table.Row>
                              <Table.Cell>
                                {ar.value}
                              </Table.Cell>
                              <Table.Cell>
                                {ar.Type}
                              </Table.Cell>
                              <Table.Cell>
                                {ar.Details}
                              </Table.Cell>
                            </Table.Row>
                          )}
                        )}
                      </Table.Body>
                    </Table>
                  </Modal.Content>
                </Modal>
                <Button color="orange" onClick={()=>
                {
                  if(this.state.armor===""){

                  } else {
                    const cnt = this.state.arcnt
                    if(cnt===0){
                      let arm = Armor.filter(a => a.value==this.state.armor)[0]
                      if(arm.Ability==="ARC"){
                        this.setState({arc_bn: this.state.arc_bn + arm.Numval, arcnt: 1})
                      } else if(arm.Ability==="DEF"){
                        this.setState({def_val: this.state.def_val + arm.Numval, arcnt: 1})
                      } else if(arm.Ability==="GRC"){
                        this.setState({grc_bn: this.state.grc_bn + arm.Numval, arcnt: 1})
                      }
                    }
                  }
                }}>
                  Equip Armor
                </Button>
                <Dropdown
                  className="weaps" placeholder="-Add-"
                  fluid selection options={Armor} onChange={(e,data) =>
                  {
                    if(this.state.armor===""){
                      this.setState({armor:data.value})
                    } else if(this.state.arcnt === 1){
                      let arm = Armor.filter(a => a.value==this.state.armor)[0]
                      if(arm.Ability==="ARC"){
                        this.setState({arc_bn: this.state.arc_bn - arm.Numval, arcnt: 0})
                      } else if(arm.Ability==="DEF"){
                        this.setState({def_val: this.state.def_val - arm.Numval, arcnt: 0})
                      } else if(arm.Ability==="GRC"){
                        this.setState({grc_bn: this.state.grc_bn - arm.Numval, arcnt: 0})
                      }
                      this.setState({armor:data.value})
                    }
                  }}
                />
                <Modal trigger={<Button color="blue">Animals</Button>} basic size="small" closeIcon>
                  <Modal.Content scrolled>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Animal</Table.HeaderCell>
                          <Table.HeaderCell>HP</Table.HeaderCell>
                          <Table.HeaderCell>Damage</Table.HeaderCell>
                          <Table.HeaderCell>Movement</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {Animals.map(an => {
                          return (
                            <Table.Row>
                              <Table.Cell>
                                {an.value}
                              </Table.Cell>
                              <Table.Cell>
                                {an.Hp}
                              </Table.Cell>
                              <Table.Cell>
                                {an.Damage}
                              </Table.Cell>
                              <Table.Cell>
                                {an.Movement}
                              </Table.Cell>
                            </Table.Row>
                          )}
                        )}
                      </Table.Body>
                    </Table>
                  </Modal.Content>
                </Modal>
                <Dropdown
                  className="weaps" placeholder="-Add-"
                  fluid selection options={Animals} onChange={(e,data) =>
                  {
                    this.setState({anim:data.value})
                  }}
                />
                <Button color="blue">General Items</Button>
                <Input size="small" style={{height:27}}>
                  <Label>Gold</Label>
                  <input style={{maxWidth:55, marginRight:3}} value={this.state.gold} onChange={(e)=>
                    this.setState({gold:Number(e.target.value)})
                  }/>
                  <Button size="tiny" color="green" icon="caret up" onClick={()=>
                    this.setState({gold:this.state.gold+1})
                  }/>
                  <Button size="tiny" color="red" icon="caret down" onClick={()=>
                    this.setState({gold:this.state.gold-1})
                  }/>
                </Input>

                <TextArea placeholder="Add any other items"
                style={{width:"100%", border:"none", minHeight:50, maxWidth:"100%"}} onChange={(e) =>
                  this.setState({items:e.target.value})
                }/>
              </div>
            </Segment>
            <Segment className="topheader">
              <div className="octagon"> Resistance/Weakness</div>
            </Segment>
            <Segment className="bottomfield">
              <div className="octagon">
                <Form>
                  <TextArea placeholder="Add any resistances or weaknesses"
                    style={{width:"100%", minHeight:50}} onChange={(e) =>
                      this.setState({res:e.target.value})
                    }/>
                </Form>
              </div>
            </Segment>
            <Segment className="topheader">
              <div className="octagon">Adv/Disadv</div>
            </Segment>
            <Segment className="bottomfield">
              <div className="octagon">
                <Form>
                  <TextArea placeholder="Add any advantages or disadvantages"
                    style={{width:"100%", minHeight:50}} onChange={(e) =>
                      this.setState({adv:e.target.value})
                    }/>
                </Form>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment className="topheader">
              <div className="octagon">Order Skills</div>
            </Segment>
            <Segment className="bottomfield">
              <div
                className="octagon scroll"
                dangerouslySetInnerHTML={{__html: this.state.skills}}
                ></div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default CharSheet;
