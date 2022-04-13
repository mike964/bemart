import { products, users } from './_data';

const fake_api = ( endpoint, payload ) => {

  let data;
  // const laptops = [ "Macbook Air", "Macbook Pro", "Macbook 16" ];
  const cellphones = [ "iPhone Pro", "Galaxy S10", "HTC 9" ];

  switch ( endpoint ) {
    case "/products":
      data = { products };
      break;
    case "/products/id":
      let product = products.filter( ( item ) => item._id === payload )
      // console.log( product )   // array
      data = product[ 0 ]
      break;
    case "/cellphones":
      data = cellphones;
      break;
    case "/login":
      let user = users.filter( ( item ) => item.email === payload )
      data = user[ 0 ]
      // console.log( data )
      break;
    case "/users":   // * Get logged in user details
      let user_ = users.filter( ( item ) => item._id === payload )
      data = user_[ 0 ]
      // console.log( data )
      break;
    default:
      // data = "No product found";
      data = null;
  }

  // console.log( Date.now() );

  return data;
};

const axios_get = ( endpoint, payload ) => {
  console.log( "--- fake api: axios_get" );
  console.log( endpoint )
  console.log( payload )
  const thePromise = new Promise( ( resolve, reject ) => {
    // resolve(meetingDetails); // means return
    let data = fake_api( endpoint, payload );
    // console.log(data); 

    setTimeout( () => {
      if ( data ) {
        resolve( { data } )
        // * putting data inside {} to mimic axios requests
      } else {
        reject( new Error( "No data to return!" ) );
      }
    }, 1000 );
  } );

  // const result = await thePromise();   // TypeError: thePromise is not a function
  // return result;
  return thePromise;
}

export { axios_get }