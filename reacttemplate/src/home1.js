import React from "react";
import axios from "axios";
class Homee extends React.Component{

    getdetails()
    {
        var name=document.getElementById("customertext");
        var mobile=document.getElementById("customermobile");
        var orderdate=document.getElementById("orderdate");
    
        var OptChickenRiceBowl=document.getElementById("OptChickenRiceBowl");
        var OptPopcornRiceDuo=document.getElementById("OptPopcornRiceDuo");
        var OptVegRiceBowl=document.getElementById("OptVegRiceBowl");
    
        var OptBurger=document.getElementById("OptBurger");
        var OptPizza=document.getElementById("OptPizza");
        var OptFries=document.getElementById("OptFries");
        var OptChickenPopcorn=document.getElementById("OptChickenPopcorn");
    
        var OptRedbull=document.getElementById("OptRedbull");
        var OptPepsi=document.getElementById("OptPepsi");
    
        var OptChocoKrusher=document.getElementById("OptChocoKrusher");
        var OptStrawberryKrusher=document.getElementById("OptStrawberryKrusher");
        var OptVanillaKrusher=document.getElementById("OptVanillaKrusher");
    
        var customername=name.value;
        var customermobile=mobile.value;
        var date=orderdate.value;
        
    
        var mealname="";
        var snacksname="";
        var Beveragename="";
        var krushername="";
        var mealcost=0;
        var snackscost=0;
        var beveragecost=0;
        var krushercost=0;
        var total=0;
    
        if(OptChickenRiceBowl.checked)
        {
            mealname=OptChickenRiceBowl.value;
            mealcost=210;
        }
        if(OptPopcornRiceDuo.checked)
        {
            mealname=OptPopcornRiceDuo.value;
            mealcost=240;
        }
        if(OptVegRiceBowl.checked)
        {
            mealname=OptVegRiceBowl.value;
            mealcost=170;
        }
        if(OptBurger.checked)
        {
            snacksname=OptBurger.value;
            snackscost=120;
        }
        if(OptPizza.checked)
        {
            snacksname=OptPizza.value;
            snackscost=145;
        }
        if(OptFries.checked)
        {
            snacksname=OptFries.value;
            snackscost=60;
        }
        if(OptChickenPopcorn.checked)
        {
            snacksname=OptChickenPopcorn.value;
            snackscost=115;
        }
        total=mealcost+snackscost;
        if(OptRedbull.checked)
        {
            Beveragename+=OptRedbull.value+"<br>";
            beveragecost=90;
            total+=beveragecost;
        }
        if(OptPepsi.checked)
        {
            Beveragename+=OptPepsi.value+"<br>";
            beveragecost=85;
            total+=beveragecost;
        }
        if(OptChocoKrusher.checked)
        {
            krushername=OptChocoKrusher.value;
            krushercost=40;
            total+=krushercost;
        }
        if(OptStrawberryKrusher.checked)
        {
            krushername=OptStrawberryKrusher.value;
            krushercost=45;
            total+=krushercost;
        }
        if(OptVanillaKrusher.checked)
        {
            krushername=OptVanillaKrusher.value;
            krushercost=55;
            total+=krushercost;
        }
        document.getElementById("nameinbill").innerHTML=customername;
        document.getElementById("mobileinbill").innerHTML=customermobile;
        document.getElementById("dateinbill").innerHTML=date;
        document.getElementById("mealinbill").innerHTML=mealname;
        document.getElementById("snacksinbill").innerHTML=snacksname;
        document.getElementById("beveragesinbill").innerHTML=Beveragename;
        document.getElementById("krushersinbill").innerHTML=krushername;
        document.getElementById("totalbill").innerHTML="&#8377;"+total+"/-";
        
    }
    constructor(props)
    {
        super(props);
        this.getdetails=this.getdetails.bind(this);
        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);
        this.onChangeOrderDate=this.onChangeOrderDate.bind(this);
        this.onChangeRice=this.onChangeRice.bind(this);
        this.onChangeSnacks=this.onChangeSnacks.bind(this);
        this.onChangeDrinks=this.onChangeDrinks.bind(this);
        this.onChangeKrushers=this.onChangeKrushers.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            first_name: '',
            mobile:'',
            orderdate:'',
            rice:'',
            snacks:'',
            drinks:'',
            krushers:''
        }
    }
        onChangeFirstName(e){
            this.setState({
                first_name:e.target.value,
                
            });
        }
        onChangeMobile(e){
            this.setState({
                mobile:e.target.value,
                
            });
        }
        onChangeOrderDate(e){
            this.setState({
                orderdate:e.target.value,
                
            });
        }
        onChangeRice(e){
            this.setState({
                rice:e.target.value,
                
            });
        }
        onChangeSnacks(e){
            this.setState({
                snacks:e.target.value,
                
            });
        }
        onChangeDrinks(e){
            this.setState({
                drinks:e.target.value,
                
            });
        }
        onChangeKrushers(e){
            this.setState({
                krushers:e.target.value,
                
            });
        }
        goBack()
        {
            window.location.assign("http://localhost:3000/login");
        }
        onSubmit(e){
console.log("hi");
            e.preventDefault();
            const obj={
                first_name:this.state.first_name,
                mobile:this.state.mobile,
                orderdate:this.state.orderdate,
                rice:this.state.rice,
                snacks: this.state.snacks,
                drinks:this.state.drinks,
                krushers: this.state.krushers
            };
            console.log(obj);
            const formData = new FormData()
        formData.append("first_name",this.state.first_name)
        formData.append("mobile",this.state.mobile)
        formData.append("orderdate",this.state.orderdate)
        formData.append("rice",this.state.rice)
        formData.append("snacks",this.state.snacks)
        formData.append("drinks",this.state.drinks)
        formData.append("krushers",this.state.krushers)
        axios.post("http://localhost:800/connect.php",formData,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        .then(response => {
             console.log(response.data)
            
        })
        }
        
    render(){
        return(
        <div>
                <form onSubmit={this.onSubmit}>
    <div className="carousel slide" id="carouselDemo" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#carouselDemo" data-slide-to="0"></li>
                <li data-target="#carouselDemo" data-slide-to="1"></li>
                <li data-target="#carouselDemo" data-slide-to="2"></li>
            </ul>
    
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../assets/images/kfcbucketbanner.jpg" className="d-block w-100"/>
            </div>
            <div className="carousel-item">
                <img src="../assets/images/KFCDoubles2banner.jpg" className="d-block w-100"/>
            </div>
            <div className="carousel-item">
                <img src="../assets/images/kfcwednesdaybanner.jpg" className="d-block w-100"/>
            </div>
        </div>
        <a href="#carouselDemo" className="carousel-control-prev" data-slide="prev" role="button">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a href="#carouselDemo" className="carousel-control-next" data-slide="next" role="button">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div>
    <div className="accordion" id="kfcmenu">
       
        <div className="card">
            <div className="card-header">
                <button className="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapseMeal">Choose Meal</button>
            </div>
            <div className="collapse" id="collapseMeal" data-parent="#kfcmenu">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header" style={{height: '250px'}}>
                                    <img src="../assets/images/kfcchickenricebowl.jpg" width="50%" height="100%"/>
                                </div>
                                <div className="card-body">
                                    <div style={{height:'80px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Chicken Rice Bowl</h3>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <input type="radio" value="Chicken Rice Bowl" id="OptChickenRiceBowl" name="rice" onChange={this.onChangeRice}/>&#8377; 210/-
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                          <div className="card">
                              <div className="card-header" style={{height: '250px'}}>
                                  <img src="../assets/images/kfcpopcornriceduo.jpg" width="50%" height="100%"/>
                              </div>
                              <div className="card-body">
                                  <div style={{height:'80px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Popcorn Rice Bowl</h3>
                                  </div>
                              </div>
                              <div className="card-footer">
                                  <input type="radio" value="Popcorn Rice Duo" id="OptPopcornRiceDuo" name="rice" onChange={this.onChangeRice}/>&#8377; 240/-
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="card">
                              <div className="card-header" style={{height: '250px'}}>
                                  <img src="../assets/images/kfcveg-rice-bowl.jpg" width="50%" height="100%"/>
                              </div>
                              <div className="card-body">
                                  <div style={{height:'80px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Veg Rice Bowl</h3>
                                   </div>
                              </div>
                              <div className="card-footer">
                                  <input type="radio" value="veg Rice Bowl" id="OptVegRiceBowl" name="rice" onChange={this.onChangeRice}/>&#8377; 170/-
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
           <div className="card-header">
              <button type="button" className="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapsesnacks">Choose Snacks</button>
           </div>
           <div className="collapse" id="collapsesnacks" data-parent="#kfcmenu">
             <div className="card-body">
                 <div className="row">
                     <div className="col-3">
                         <div className="card">
                             <div className="card-header" style={{height: '200px'}}>
                                 <img src="../assets/images/kfcburger.jpg" width="100%" height="100%" />
                             </div>
                             <div className="card-body">
                                <div style={{height: '70px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Burger</h3>
                                </div> 
                             </div>
                             <div className="card-footer">
                                 <input type="radio" id="OptBurger" value="Chicken Burger" name="snacks"onChange={this.onChangeSnacks}/>&nbsp;&#8377;120/-
                             </div>
                         </div>
                     </div>
                     <div className="col-3">
                       <div className="card">
                           <div className="card-header" style={{height: '200px'}}>
                               <img src="../assets/images/kfcpizza.jfif" width="100%" height="100%" />
                           </div>
                           <div className="card-body">
                               <div style={{height: '70px'}}>
                                <h3 style={{fontSize: '3vm'}}>Pizza</h3>
                                </div>
                           </div>
                           <div className="card-footer">
                               <input type="radio" id="OptPizza" value="Chicken Pizza" name="snacks"onChange={this.onChangeSnacks}/>&nbsp;&#8377;145/-
                           </div>
                       </div>
                     </div>
                     <div className="col-3">
                      <div className="card">
                          <div className="card-header" style={{height: '200px'}}>
                              <img src="../assets/images/kfcfries.jpg" width="100%" height="100%" />
                          </div>
                          <div className="card-body">
                              <div style={{height: '70px'}}>
                               <h3 style={{fontSize: '3vm'}}>Fries</h3>
                              </div>
                          </div>
                          <div className="card-footer">
                              <input type="radio" id="OptFries" value="French Fries" name="snacks"onChange={this.onChangeSnacks}/>&nbsp;&#8377; 60/-
                          </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="card">
                          <div className="card-header" style={{height: '200px'}}>
                              <img src="../assets/images/kfcpopcorn.jpg" width="100%" height="100%" />
                          </div>
                          <div className="card-body">
                              <div style={{height: '70px'}}>
                               <h3 style={{fontSize: '3vm'}}>Popcorn</h3>
                              </div>
                          </div>
                          <div className="card-footer">
                              <input type="radio" id="OptChickenPopcorn" value="Chicken Popcorn" name="snacks"onChange={this.onChangeSnacks}/>&nbsp;&#8377;115/-
                          </div>
                      </div>
                    </div>
                 </div>
                 
             </div>
           </div>
        </div>
        <div className="card">
            <div className="card-header">
                <button className="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapsebeverages">Beverage</button>
            </div>
            <div className="collapse" id="collapsebeverages" data-parent="#kfcmenu">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header" style={{height: '200px'}}>
                                    <img src="assets/images/kfcredbullenergydrink.jpg" width="50%" height="100%"/>
                                </div>
                                <div className="card-body">
                                    <div style={{height: '40px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Redbull</h3>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <input id="OptRedbull" value="Redbull Energy Drink" type="radio" name="drinks" onChange={this.onChangeDrinks}/>&#8377; 90/-
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header" style={{height: '200px'}}>
                                    <img src="../assets/images/kfcpepsi.jpg" width="50%" height="100%"/>
                                </div>
                                <div className="card-body">
                                    <div style={{height: '40px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Pepsi</h3>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <input  id="OptPepsi" value="Pepsi Can" type="radio" name="drinks" onChange={this.onChangeDrinks}/>&nbsp;&#8377; 85/-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <button className="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapsekrusher">Krushers</button>
            </div>
            <div className="collapse" id="collapsekrusher" data-parent="#kfcmenu">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header" style={{height: '200px'}}>
                                    <img src="../assets/images/kfcmintchockrushers.jfif" width="70%" height="100%"/>
                                </div>
                                <div className="card-body">
                                    <div style={{height: '70px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Choco Mint</h3>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <input type="radio" id="OptChocoKrusher" value="Choco Mint Krusher" name="krushers" onChange={this.onChangeKrushers}/>&#8377; 40/-
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                          <div className="card">
                              <div className="card-header" style={{height: '200px'}}>
                                  <img src="../assets/images/kfcstrawberrykrusher.jfif" height="100%" width="70%"/>
                              </div>
                              <div className="card-body">
                                  <div style={{height: '70px'}}>
                                  <h3 style={{fontSize: '3vm'}}>Strawberry</h3>
                                  </div>
                              </div>
                              <div className="card-footer">
                                  <input type="radio" id="OptStrawberryKrusher" value="Strawberry Krusher" name="krushers" onChange={this.onChangeKrushers}/>&#8377; 45/-
                              </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card">
                              <div className="card-header" style={{height: '200px'}}>
                                  <img src="../assets/images/kfcbluevanillakrusher.gif" height="100%" width="70%"/>
                              </div>
                              <div className="card-body">
                                  <div style={{height: '70px'}}>
                                  <h3 style={{fontSize: '3vm'}}>Vanilla Blue</h3>
                                  </div>
                              </div>
                              <div className="card-footer">
                                  <input type="radio" id="OptVanillaKrusher" value="Vanilla Krusher" name="krushers" onChange={this.onChangeKrushers}/>&#8377; 55/-
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <button type="button" className="btn btn-danger btn-block"  data-toggle="collapse" data-target="#customercollapse">CustomerInfo</button>
            </div>
            <div className="collapse fade" id="customercollapse" data-parent="#kfcmenu">
                <div className="card-body">
                    <div className="row">
                    <div className="col-4">
                        <label style={{fontSize: '3vm'}}>Name</label>
                    </div>
                    <div className="col-4">
                        <input type="text" id="customertext" name="customertext" className="form-control" value={this.state.first_name} onChange={this.onChangeFirstName}/>
                    </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                          <label style={{fontSize: '3vm'}}>Mobile</label>
                      </div>
                      <div className="col-4">
                          <input type="text" id="customermobile" name="customermobile" className="form-control" value={this.state.mobile} onChange={this.onChangeMobile}/>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label>OrderDate</label>
                        </div>
                        <div className="col-4">
                            <input type="date" id="orderdate" name="orderdate" className="form-control" value={this.state.orderdate} onChange={this.onChangeOrderDate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  <div align="center" style={{marginTop:'15px'}}>
      <input type="submit" onClick={this.getdetails} onSubmit={this.onSubmit} name="submit"className="btn btn-outline-danger btn-lg" value="Place Order" data-toggle="modal" data-target="#summarymodal"/>
  </div>
  <div align="center" style={{marginTop:'15px'}}>
      <input type="submit" className="btn btn-outline-danger btn-lg" value="Logout" onClick={this.goBack}/>
  </div>
  <div className="modal" id="summarymodal">
      <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header">
                  <h3 className="modal-title">Bill Summary</h3>
              </div>
              <div className="modal-body">
                <table className="table table-success table-hover">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td id="nameinbill"></td>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td id="mobileinbill"></td>
                        </tr>
                        <tr>
                            <td>Date Of Order</td>
                            <td id="dateinbill"></td>
                        </tr>
                        <tr>
                            <td>Meal</td>
                            <td id="mealinbill"></td>
                        </tr>
                        <tr>
                            <td>Snacks</td>
                            <td id="snacksinbill"></td>
                        </tr>
                        <tr>
                            <td>Beverages</td>
                            <td id="beveragesinbill"></td>
                        </tr>
                        <tr>
                            <td>Krushers</td>
                            <td id="krushersinbill"></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td id="totalbill"></td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div className="modal-footer">
                
              </div>
          </div>
      </div>
  </div>
  </form>

        </div>
        );
    }
}
export default Homee;