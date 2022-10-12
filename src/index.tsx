import * as React  from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Select, FormField, Label, Button, Input, LinkWidgetContainer, Modal } from "uxp/components";
import './styles.scss';

import {Avatar, Typography, Card, CardContent,  Box, List, Rating, ListItem, Divider, ListItemText, ListItemAvatar, InputLabel,  MenuItem,FormControl, SelectChangeEvent  } from '@mui/material';

 
//import AccessTimeFilledIcon1 from '@material-ui/icons/ChevronLeft';

  import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'; 
  import PoolIcon from '@mui/icons-material/Pool'; 
  import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; 
  import SpaIcon from '@mui/icons-material/Spa'; 
  import NightlifeIcon from '@mui/icons-material/Nightlife';

//  import VideoBg from "reactjs-videobg";

// import { Player } from 'video-react';

import { Player, ControlBar } from 'video-react';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
 

var dataset = [ 
    {
     "id": "Monday",
      "label": "WED",
      "value": 23,
      "img": "./images/sun.svg",
      "status":"Thunder"
    },
    {
     "id": "Tuesday",
      "label": "THU",
      "value": 23,
      "img": "images/cloud-lightning.svg",
      "status":"Sunny"
    },
    {
     "id": "Wednesday",
      "label": "FRI",
      "value": 23,
      "img": "images/cloud-drizzle.svg",
      "status":"Thunder"
    },
    {
     "id": "Thursday",
      "label": "SAT",
      "value": 23,
      "img": "images/cloud.svg",
      "status":"Rainy"
    },
    {
     "id": "Friday",
      "label": "SUN",
      "value": 23,
      "img": "images/cloud-rain.svg",
      "status":"Thunder"
    },
    {
      "id": "Saturday",
      "label": "MON",
      "value": 23,
      "img": "./images/sun.svg",
      "status":"Rainy"
    } 
] 


const WeatherWidget: React.FunctionComponent<IWidgetProps> = (props) => {
 
    
    const DayWeatherlist = () => (
        <ul className="daylist">
          {dataset.map(item => (
            <li key={item.id}>   
              <div className="status"><img src={item.img}></img></div>
              <div className="label">{item.label}</div>
              <div className="value">{item.value}</div>
            </li>
          ))}
        </ul>
      );
    
 
      
    return (
        <WidgetWrapper>  

        <div className="weather_widget">   

          <div className="weather_widget-top">
            <div className="perc-value">
                  <img src="images/humidity.png" />   
                 <p>30%</p>
            </div>  
          </div>  

          <div className="weather_icon"><img src="./images/sun.svg" /></div>  

           <div className="weather-content"> 
                <h4>32 <sup>o</sup><span>C</span></h4>
                <p>Sunny Today</p>
            </div>

            <DayWeatherlist />  

        </div> 
    </WidgetWrapper>
    )
};




const ExchangeRateWidget: React.FunctionComponent<IWidgetProps> = (props) => { 

    let [selected, setSelected] = React.useState<string | null>("op-1"); 
    let [inputValue, setInputValue] = React.useState<string | null>("10.00 USD"); 

    const [buttonText, setButtonText] = React.useState("Convert"); 

     
   return (
       <WidgetWrapper className="exchange_widget">   

            <TitleBar title={'Currency Exchange Rates'} /> 

                    <div className="exchange_widget_content">   

                            <div className="exchange_widget-top">
                                <FormField inline backgroundColor="white"> 

                                    <Input  className="exchange_input"
                                        type="text"
                                        value={inputValue}
                                        onChange={(value) => { setInputValue(value) }}
                                        isValid={inputValue ? inputValue.trim().length > 0 : null} 
                                        placeholder="10.00 USD"
                                    /> 

                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "USD", value: "op-1"},
                                            { label: "Singapore Dollar", value: "op-2" },
                                            { label: "Slovak Koruna", value: "op-3" },
                                            { label: "Sloevenian Tolar", value: "op-4" },
                                            { label: "Soloman Islands Dollar", value: "op-5" },
                                            { label: "Soloman Islands Dollar", value: "op-6" },
                                            { label: "Soloman Islands Dollar", value: "op-7" },
                                            { label: "Soloman Islands Dollar", value: "op-8" },
                                            { label: "Soloman Islands Dollar", value: "op-9" },
                                            { label: "Soloman Islands Dollar", value: "op-10" },
                                            { label: "Soloman Islands Dollar", value: "op-11" },
                                            { label: "Us Dollar", value: "op-12" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid
                                    /> 

                                   <div className="equal_arrow"><img src='./images/arrow-right.svg'></img></div>
                                    
                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "EURO", value: "op-1" },
                                            { label: "DINAR", value: "op-2" },
                                            { label: "USD", value: "op-3" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={false}
                                    /> 

                                </FormField> 
                          
                          </div>

                          <div className="exchange_widget-bot"> 

                            <button className="btn showcase" type="submit" onClick={() => { setButtonText("10.36 Euro");}}>
                                {buttonText}
                            </button>

                          </div> 

                    </div> 
                    

            </WidgetWrapper>
   )
};



const HotelVideoWidget: React.FunctionComponent<IWidgetProps> = (props) => { 
 
    return (
        <WidgetWrapper className="Hotel_video_widget">    
 
        <Player autoPlay src="./video/sunny.mp4">
            <ControlBar autoHide={false} className="my-class" />
        </Player>   
                            
        </WidgetWrapper>
    )
 };
  


const SwimmingPoolWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    let [showLinkWidget, setShowLinkWidget] = React.useState(false); 

        
    var roomServicesList = [ 
        {
        "id": "1",
        "label": "Laundry Bag", 
         'img' :  <PoolIcon />  
        },
        {
        "id": "2",
        "label": "Laundary", 
        "img": <PoolIcon />   
        },
        {
        "id": "3",
        "label": "Water", 
        "img": <PoolIcon />  
        },
        {
        "id": "4",
        "label": "Slippers", 
        "img": <PoolIcon />  
        },
        {
        "id": "5",
        "label": "Toilet Roll", 
        "img": <PoolIcon />  
        },
        {
        "id": "6",
        "label": "Hand Towel", 
        "img": <PoolIcon />  
        },
        {
        "id": "7",
        "label": "Bath Towel", 
        "img": <PoolIcon />  
        },
        {
        "id": "8",
        "label": "Swimming Pool", 
        "img": <PoolIcon />   
        },
        {
        "id": "9",
        "label": "Laundry Bag", 
        "img": <PoolIcon />  
        },
        {
        "id": "10",
        "label": "Laundary", 
        "img": <PoolIcon />  
        },
        {
        "id": "11",
        "label": "Water", 
        "img": <PoolIcon />  
        },
        {
        "id": "12",
        "label": "Slippers", 
        "img": <PoolIcon />  
        } 
    ];


const RoomServices = () => (
    <ul className="room_services_list">
      {roomServicesList.map(item => (
        <li key={item.id}>   
           {/* <div className="pict"><img src={item.img} /></div>   */}
           <div className="icon">{item.img}</div>  
          {/* <div className="icon"><PoolIcon /></div>  */}
          <button className="btn showcase" type="submit" onClick={() => setShowModal(true)}> {item.label}</button> 

        </li>
      ))}
    </ul>
  ); 


  let [showModal, setShowModal] = React.useState(false);


    <TitleBar title={'Swimming Pool Widget'} /> 
       
     return (

         <WidgetWrapper className="hotel_facility_widget">    
  
                    <div className="hotel_facility_widget_content">   
                   

                        <div className="icon"> 
                            <PoolIcon />  
                        </div>

                        <button className="btn showcase" type="submit" onClick={() => setShowLinkWidget(true)}>
                            Swimming Pool
                        </button> 
                             

                    </div>   

                      
                    <LinkWidgetContainer  className="facility_widget" show={showLinkWidget} > 

                        <div className="modal-header"> 
                            <div className="facility_widget-top">  
                                <div className="model_close"  onClick={() => setShowLinkWidget(false)}></div>
                            
                                <div className="facility_widget-top_lft"> 
                                    <h6>Good day Mohan,</h6>
                                    <h3>Take Control</h3>
                                    <div className="user_pict"></div>
                                </div>   
                            
                                <div className="facility_widget-top_rgt">  
                                    <p>Room 200 <br/>
                                    September 21,2022</p>
                                </div>  
                            </div>   
                        </div>  


                        <div className="facility_widget-content">  
                            <div className="room_services">   
                                 <h5>ROOM SERVICES</h5>  

                                <RoomServices />  

                                <Modal title ={'item.label'} show={showModal} onOpen={() => { }} onClose={() => setShowModal(false)} >
                       
                                    <WidgetWrapper className="roomservices_popup">  

                                        {/* <TitleBar title={'item.label'} />  */}

                                                <div className="roomservices_popup-content">    
                                                    
                                                    <div className="icon"> 
                                                            <PoolIcon />  
                                                    </div>

                                                    <button className="btn showcase" type="submit" onClick={() => setShowLinkWidget(true)}>
                                                        Swimming Pool
                                                    </button>
                                                        
                                                    </div>  

                                    </WidgetWrapper>

                                </Modal> 

                            </div> 
                        </div>  
                           
                        


                        </LinkWidgetContainer>

  
              </WidgetWrapper>
     )
  };
  


  const HotelClubWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    <TitleBar title={'Swimming Pool  Widget'} /> 

    let [showHotelClub, setshowHotelClub] = React.useState(false); 
       
     return (

         <WidgetWrapper className="hotel_facility_widget">    
  
                      <div className="hotel_facility_widget_content">  

                        <div className="icon"> 
                                <NightlifeIcon />  
                        </div>

                        {/* <button className="btn showcase" type="submit">
                            Hotel Club
                        </button>  */}

                        <button className="btn showcase" type="submit" onClick={() => setshowHotelClub(true)}>
                            Hotel Club
                        </button>   
                            
                        {/* <p>Hotel Club</p>   */}

                      </div>  


                      <LinkWidgetContainer  className="facility_widget" show={showHotelClub} > 

                        <div className="modal-header">
                            
                            <div className="facility_widget-top">  
                                <div className="model_close"  onClick={() => setshowHotelClub(false)}></div> 

                                <div className="facility_widget-top_lft"> 
                                    <h6>Good day Mohan,</h6>
                                    <h3>Take Control</h3>
                                    <div className="user_pict"></div>
                                </div>    
                                <div className="facility_widget-top_rgt">  
                                    <p>Room 200 <br/>
                                    September 21,2022</p>
                                </div>  
                            </div>   
                        </div>   


                        <div className="facility_widget-content">

                            <h5>HOTEL CLUB</h5>
                            <em>KEEP UP WITH YOUR FITNESS ROUTINE</em>

                            <p>Stay in sync with your fitness regime even when you are on vacation! Head out to our fully-equipped fitness centre for a wholesome and revitalising workout session.</p>

                            <p>The hotel fitness center comes replete with a host of modern equipment that is both easy to use and user-friendly. There is also a dedicated section for aerobics and to train with free weights at the gymnasium. A professional fitness trainer will be at the centre offering you support during your intensive workout sessions and to provide you with guidance whenever you need it.</p>

                            <div className="facility_pict">
                                <img src="./images/gym-pict.jpg" />
                            </div>
                            
                        </div> 

                        </LinkWidgetContainer>

                      
  
              </WidgetWrapper>
     )
  };
  

const Massage_parlourWidget: React.FunctionComponent<IWidgetProps> = (props) => { 
    
    let [showMassageParlour, setshowMassageParlour] = React.useState(false); 
 

    <TitleBar title={'Massage Parlour Widget'} /> 
       
     return (

         <WidgetWrapper className="hotel_facility_widget">    
  
                <div className="hotel_facility_widget_content">  

                    <div className="icon"> 
                            <SpaIcon />  
                    </div> 

                    <button className="btn showcase" type="submit" onClick={() => setshowMassageParlour(true)}>
                        Massage Parlour
                    </button>  

                </div>   


                <LinkWidgetContainer  className="facility_widget" show={showMassageParlour} > 

                    <div className="modal-header">
                        
                        <div className="facility_widget-top">  
                            <div className="model_close"  onClick={() => setshowMassageParlour(false)}></div> 

                            <div className="facility_widget-top_lft"> 
                                <h6>Good day Mohan,</h6>
                                <h3>Take Control</h3>
                                <div className="user_pict"></div>
                            </div>    
                            <div className="facility_widget-top_rgt">  
                                <p>Room 200 <br/>
                                September 21,2022</p>
                            </div>  
                        </div>   
                    </div>   
                    

                    <div className="facility_widget-content"> 
                        <h5>MASSAGE PARLOUR</h5>
                        <em>FOR A REFRESHING DIP ON YOUR VACATION</em> 
                        <p>Take a break from the midday heat by diving into one of our lavish swimming pools – it’s the perfect way to refresh yourself and relax as the tropical sun reaches its zenith. Here at the ABC Beach Resort and Spa, guests have unlimited access to two spectacular swimming pools.</p>

                        <p>Take a break from the midday heat by diving into one of our lavish swimming pools – it’s the perfect way to refresh yourself and relax as the tropical sun reaches its zenith. Here at the ABC Beach Resort and Spa, guests have unlimited access to two spectacular swimming pools.</p>

                        <div className="facility_pict">
                            <img src="./images/massage-parlour.jpg" />
                        </div>
                    </div>  

                </LinkWidgetContainer>
  
         </WidgetWrapper>
     )
  };
   

const GymnasiumWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    let [showGymnasium, setshowGymnasium] = React.useState(false); 

    <TitleBar title={'Gymnasium Widget'} /> 
       
     return (

         <WidgetWrapper className="hotel_facility_widget">    
  
                      <div className="hotel_facility_widget_content">  

                            <div className="icon"> 
                                 <FitnessCenterIcon />  
                            </div> 

                            <button className="btn showcase" type="submit" onClick={() => setshowGymnasium(true)}>
                                Gymnasium
                            </button>  
                             
                            {/* <p>Gymnasium</p>   */}

                      </div>   


                      <LinkWidgetContainer  className="facility_widget" show={showGymnasium} > 

                        <div className="modal-header">
                            
                            <div className="facility_widget-top">  
                                <div className="model_close"  onClick={() => setshowGymnasium(false)}></div> 

                                <div className="facility_widget-top_lft"> 
                                    <h6>Good day Mohan,</h6>
                                    <h3>Take Control</h3>
                                    <div className="user_pict"></div>
                                </div>    
                                <div className="facility_widget-top_rgt">  
                                    <p>Room 200 <br/>
                                    September 21,2022</p>
                                </div>  
                            </div>   
                        </div>   


                        <div className="facility_widget-content">

                            <h5>FITNESS CENTER</h5>
                            <em>KEEP UP WITH YOUR FITNESS ROUTINE</em>

                            <p>Stay in sync with your fitness regime even when you are on vacation! Head out to our fully-equipped fitness centre for a wholesome and revitalising workout session.</p>

                            <p>The hotel fitness center comes replete with a host of modern equipment that is both easy to use and user-friendly. There is also a dedicated section for aerobics and to train with free weights at the gymnasium. A professional fitness trainer will be at the centre offering you support during your intensive workout sessions and to provide you with guidance whenever you need it.</p>

                            <div className="facility_pict">
                                <img src="./images/gym-pict.jpg" />
                            </div>

                        </div> 

                        </LinkWidgetContainer>
  
              </WidgetWrapper>
     )
  };
  


const BloodmaryWidget: React.FunctionComponent<IWidgetProps> = (props) => {  
 
    return (
        <WidgetWrapper className="bloodmary_widget">   
 
                         <div className="bloodmary_widget-content">  
                              
                                <div className="bloodmary_widget-content-lft"> 
                                    <h4>Bloody mary <span className="offers">50% Off</span></h4> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo</p> 
                                </div>

                                <div className="bloodmary_widget-content-rgt">  
                                    <p>HAPPY HOUR <em>5PM-6PM</em></p> 
                                    <div className="juice"><img src='./images/juice.png'></img></div> 
                                </div> 
  
                         </div> 
    </WidgetWrapper>
    )
 };

 
const DealWidget: React.FunctionComponent<IWidgetProps> = (props) => {   

let [showFoodWidget, setshowFoodWidget] = React.useState(false); 


var dataset1 = [ 
    {
     "id": "Burgers",
      "label": "Burgers", 
      "img": "./images/burger.jpg"  
    },
    {
     "id": "Pizza",
      "label": "Pizza", 
      "img": "images/pizza1.jpg"  
    },
    {
     "id": "Indian",
      "label": "Indian", 
      "img": "images/Indian.jpg" 
    },
    {
     "id": "Chinese",
      "label": "Chinese", 
      "img": "images/Chinese.jpg" 
    },
    {
     "id": "Bakery",
      "label": "Bakery", 
      "img": "images/burger.jpg"
    },
    {
      "id": "Desserts",
      "label": "Desserts", 
      "img": "./images/Desserts.jpg" 
    },
    {
      "id": "Fast Food",
      "label": "Fast Food", 
      "img": "./images/Fast_Food.webp" 
    },
    {
      "id": "Tea/Drinks",
      "label": "Tea/Drinks", 
      "img": "./images/Tea_Drinks.jpg" 
    } 
];


var orderItem = [ 
    {
        "id": "1",
        "order_name": "Bacon cheese pizza", 
        "order_prize": "LKR 700.00"  
    }   
];


var orderFood = [ 
    {
        "id": "1",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "2",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "3",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "4",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "5",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "6",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "7",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    },
    {
        "id": "8",
        "food_img": "./images/pizza1.jpg", 
        "food_name": "Bacon cheese pizza", 
        "food_prize": "LKR.1500.00"  
    }   
];



const FoodList = () => (
    <ul className="foodlist">
      {dataset1.map(item => (
        <li key={item.id}>   
          <div className="pict"><img src={item.img} /></div>
          <div className="label">{item.label}</div> 
        </li>
      ))}
    </ul>
  ); 

const OrderList = () => (
    <ul className="orderlist">
      {orderItem.map(item => (
        <li key={item.id}>    
          <div className="order-id">{item.id}</div>  
          <div className="order-name">{item.order_name}</div> 
          <div className="order-prize">{item.order_prize}</div> 
        </li>
      ))}
    </ul>
  );
  

const OrderListFood = () => (
    <ul className="orderfood_list">
      {orderFood.map(item => (
        <li key={item.id}>  
          <button className="food_add-btn">+</button>  
          <div className="order-img"><img src={item.food_img} /></div>  
          <div className="order-name">{item.food_name}</div> 
          <div className="order-prize">{item.food_prize}</div> 
        </li>
      ))}
    </ul>
  );
  

 
    return (
        <WidgetWrapper className="deal_widget">  

                    <TitleBar title={'Deals'} /> 
 
                    <div className="deal_widget-content">   
                    
                        <div className="deal_widget-content-lft">  
                            <p>BUY ANY MEDIUM PIZZA &nbsp; GET A CLASSIC PERSONAL PAN PIZZA FOR</p> 
                            <button className="prize"  onClick={() => setshowFoodWidget(true)}>Rs. 500</button> 
                        </div>

                        <div className="deal_widget-content-rgt">   
                            <div className="pizza"><img src='./images/pizza.png'></img></div> 
                        </div> 

                    </div>  
                    

                    <LinkWidgetContainer  className="facility_widget" show={showFoodWidget} > 

                        <div className="modal-header">
                            
                            <div className="facility_widget-top"> 

                                <div className="model_close"  onClick={() => setshowFoodWidget(false)}></div>
                            
                                <div className="facility_widget-top_lft"> 
                                    <h6>Good day Mohan,</h6>
                                    <h3>Take Control</h3>
                                    <div className="user_pict"></div>
                                </div>   
                            
                                <div className="facility_widget-top_rgt">  
                                    <p>Room 200 <br/>
                                    September 21,2022</p>
                                </div>  

                            </div>  
                        
                        </div> 

                        {/* <div className="facility_widget-content">

                            <h5>FITNESS CENTER</h5>
                            <em>KEEP UP WITH YOUR FITNESS ROUTINE</em>

                            <p>Stay in sync with your fitness regime even when you are on vacation! Head out to our fully-equipped fitness centre for a wholesome and revitalising workout session.</p>

                            <p>The hotel fitness center comes replete with a host of modern equipment that is both easy to use and user-friendly. There is also a dedicated section for aerobics and to train with free weights at the gymnasium. A professional fitness trainer will be at the centre offering you support during your intensive workout sessions and to provide you with guidance whenever you need it.</p>

                            <div className="facility_pict">
                                <img src="./images/gym-pict.jpg" />
                            </div>

                        </div>  */}


                        <div className="facility_widget-content"> 

                            <div className="food_offers">
                                <h6>IN ROOM <span>DINE</span> </h6>
                                <h3>Get food delivered to your room step.   <div className="offer_percentage"> 15% OFF</div></h3>
                            </div>

                            <div className="food_category">   
                                    <h5>Food Categories</h5>  
                                    <FoodList /> 

                                    <WidgetWrapper className="my_order">
                                        <TitleBar title={'My Order'} /> 

                                        <div className="my_order-content">

                                            <OrderList />

                                            <ul className="orderlist total_orderlist">
                                               
                                                <li>     
                                                    <div className="order-name">Total Amount</div> 
                                                    <div className="order-prize">LKR 700.00</div> 
                                                </li> 
                                                
                                            </ul>

                                            <button className="checkout">Check out</button> 

                                        </div> 

                                    </WidgetWrapper>


                                    <WidgetWrapper className="my_order_food">
                                        <TitleBar title={'Pizza'} /> 

                                        <div className="my_order_food-content">

                                            <OrderListFood />  

                                        </div> 

                                    </WidgetWrapper>


                             </div>

                        </div> 
                
                    </LinkWidgetContainer>
            
                </WidgetWrapper>
    )
 };

 

/**
 * Register as a Widget
 */

registerWidget({
    id: "Weather",
    widget: WeatherWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});
 

registerWidget({
  id: "ExchangeRate",
  widget: ExchangeRateWidget,
  configs: {
      layout: {
          // w: 12,
          // h: 12,
          // minH: 12,
          // minW: 12
      }
  }
});
 

registerWidget({
  id: "HotelVideo",
  widget: HotelVideoWidget,
  configs: {
      layout: {
          // w: 12,
          // h: 12,
          // minH: 12,
          // minW: 12
      }
  }
});

 

registerWidget({
    id: "SwimmingPool",
    widget: SwimmingPoolWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
  });



  registerWidget({
    id: "HotelClub",
    widget: HotelClubWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
  });

  
  registerWidget({
    id: "Massage_parlour",
    widget: Massage_parlourWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
  });

  
registerWidget({
    id: "Gymnasium",
    widget: GymnasiumWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
  });
 

registerWidget({
    id: "Bloodmary",
    widget: BloodmaryWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});
 

registerWidget({
    id: "Deals",
    widget: DealWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});
  
  



function setValue(newValue: number) {
    throw new Error("Function not implemented.");
}
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Hotel",
    label: "Hotel",
    // click: () => alert("Hello"),
    component: HotelWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"Hotel",
    component: HotelWidget
});
*/