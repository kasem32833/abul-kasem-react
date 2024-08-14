const Footer = () => {
  return (
    <div>
      <div className="bg-slate-800 rounded-t-2xl py-6 px-4">
        <div className="flex justify-between text-white pb-16">
          <h1 className="text-4xl ">Lets Connet There</h1>
          <button className="bg-orange-500 rounded-full px-4 py-2">
            Hire Me
          </button>
        </div>
        <hr />
        <div className="flex text-white gap-4 py-16">
          <div className="w-1/2">
            <h3>KASEM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Explicabo ducimus, cum eum eos obcaecati fuga culpa. Aspernatur 
            praesentium accusantium iusto quis sint eius excepturi ipsam incidunt 
            assumenda. Pariatur veniam quos, fugiat ab officia accusamus quisquam iste 
            laboriosam nobis, ad sed hic nam, repellat similique fugit? Aliquam veniam 
            consequuntur voluptatum perferendis?</p>
            <div className="flex">
               <a href=""></a>
            </div>
          </div>
          <div>
            <h4 className="text-orange-500">Navigation</h4>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Resume</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange-500">Contact</h4>
            <p>+96596987424</p>
            <p>abulkasem32833@gmail.com</p>
            <p>portfolio-kaem.com</p>
          </div>
          <div>
            <h4 className="text-orange-500">Get the latest information</h4>
            <input
              className="rounded-full px-4 py-2"
              type="text"
              placeholder="Email Address"
            />
          </div>
        </div>
        <hr />
        
        <div className="flex justify-between mt-6 text-white">
            <p>Copyright 2024 kasem. All Rights Reserved.</p>
            <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
