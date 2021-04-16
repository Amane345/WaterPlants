import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LinearWithValueLabel from "../ManageHome/home";

export default class Vpanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      plants:[]
    };
  }

 

  render() {
    
    return (
    
      
        <section className="section-dashboard__main" >
          <Switch>
            <Route
              path="/">
               
            
            <LinearWithValueLabel></LinearWithValueLabel>
            </Route>
        </Switch> 
        
        
      
        </section>
        
    
    );
  }
}

// Old Code **********************

// import React, { Component } from "react";
// import SideBar from "../common/SideBar/SideBar";
// import ProductArea from "../ProductArea/ProductArea";
// import SocialContainer from "../SocialContainer/SocialContainer";
// import NavBar from "../NavBar/NavBar";
// import { showDialog, createPost } from "../../Services/Facebook/fbinit";
// import { getToken, sendTweets } from "../../Services/Twitter/TwitterService";
// import { pinterestLogin, createPin } from "../../Services/Pinterest/pinterest";
// import { retrieveAccessTokenFromRefreshToken } from "../../Services/Google/Business/business";
// import { getCandianBestSellerProducts } from "../../Services/Feeds/canadianbestseller";
// import { getSupplyDemyProducts } from "../../Services/SupplyDemy/supplydemy";
// import { getFeeds } from "../ManageFeeds/feedDbService";

// export default class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedtabtext: "Home Page",
//       products: [],
//       sideBarItems: [],
//       currentstate: "Initial",
//       allSelected: false,
//       isChecked: false,
//       page_id: ""
//     };
//   }

//   componentDidMount() {
//     getFeeds().then(response => {
//       const feedsModel = response.data;
//       const feeds = feedsModel.feeds;

//       this.setState({
//         sideBarItems: feeds
//       });
//     });
//   }

//   handleSidebarItemClick(e) {
//     var title = e.target.title;
//     this.setState({
//       selectedtabtext: title,
//       currentstate: "Loading"
//     });
//     if (title == "SupplyDemy") {
//       //Getting Supply Demy Products
//       getSupplyDemyProducts()
//         .then(response => {
//           var products = response;
//           products.forEach(product => {
//             product.checked = false;
//           });
//           this.setState({
//             products: products,
//             page_id: "2243017622626288",
//             currentstate: "Loaded"
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     } else if (title == "Canadian BestSeller") {
//       //Getting Products
//       getCandianBestSellerProducts()
//         .then(response => {
//           var products = response;
//           products.forEach(product => {
//             product.checked = false;
//           });
//           this.setState({
//             products: products,
//             page_id: "116120599058502",
//             currentstate: "Loaded"
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }
//   }

//   handleSelectAll() {
//     const products = [...this.state.products];
//     if (!this.state.allSelected)
//       products.forEach(product => (product.checked = true));
//     else products.forEach(product => (product.checked = false));
//     this.setState({
//       allSelected: !this.state.allSelected,
//       products: products
//     });
//   }

//   handleProductSelect(e) {
//     const productOld = this.state.products;
//     if (this.state.allSelected) this.setState({ allSelected: false });
//     productOld.forEach(product => {
//       if (product.title === e.target.name) product.checked = !product.checked;
//     });
//     this.setState({ products: productOld });
//   }

//   async handleTwitter() {
//     var products = [...this.state.products];
//     getToken();
//     sendTweets(products);
//   }

//   handlePinterest() {
//     var products = [...this.state.products];
//     pinterestLogin(products);
//   }

//   handleGBusiness() {
//     var products = [...this.state.products];
//     retrieveAccessTokenFromRefreshToken(products);
//   }

//   async handleFacebook() {
//     console.log("p");
//     var products = [...this.state.products];
//     var page_id = this.state.page_id;
//     await showDialog(products, page_id);
//   }

//   onComponentDidMount() {}

//   render() {
//     const {
//       selectedtabtext,
//       products,
//       currentstate,
//       allSelected,
//       sideBarItems
//     } = this.state;
//     // temporary sidebar items array which will be part of state

//     // const sideBarItems = [
//     //                     {title:"SupplyDemy", value:"supplydemy"},
//     //                     {title:"Canadian BestSeller", value:"candianbestseller"}
//     //                   ];
//     return (
//       <div className="row main-container">
//         {/* <NavBar headertext={selectedtabtext}/> */}
//         <div className="col-sm-3 col-md-2 sidebar-container">
//           <SideBar
//             onSidebarItemClick={e => {
//               this.handleSidebarItemClick(e);
//             }}
//             items={sideBarItems}
//           />
//         </div>
//         <div className="col-sm-6 col-md-7">
//           <ProductArea
//             products={products}
//             currentstate={currentstate}
//             allSelected={allSelected}
//             onAllSelect={() => this.handleSelectAll()}
//             onProductSelect={e => this.handleProductSelect(e)}
//           />
//         </div>
//         <div className="col-sm-3 col-md-2">
//           <SocialContainer
//             currentstate={currentstate}
//             onFacebook={() => this.handleFacebook()}
//             onTwitter={() => this.handleTwitter()}
//             onPinterest={() => this.handlePinterest()}
//             onGBusiness={() => this.handleGBusiness()}
//           />
//         </div>
//       </div>
//     );
//   }
// }
