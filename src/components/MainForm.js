//This is th main portion of multi-step form
import React from "react";
import "./MainForm.css";
import file from "../assets/file.png"
export default function MainForm() {
  return (
    <div className="content">
      <div className="topFormSection">
        <h3>Tell us more about your business</h3>
        <p>
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </p>
      </div>
      <div className="mainFormSection">
        <form method="post" action="">
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="legal name" className="required">Legal Name</label>
              <br />
              <input
                type="text"
                id="legalname"
                name="legalname"
                placeholder="Legal name"
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName" className="required">Doing business as</label>
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doing business as"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="company" className="required">Company Registration Number</label>
              <br />
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company Registration Number"
              />
            </div>
            <div className="input-field">
              <label htmlFor="random" className="required">Random Registration Number</label>
              <br />
              <input
                type="text"
                id="random"
                name="random"
                placeholder="Random Registration Number"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="website" className="required">Website URL</label>
              <br />
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Website URL"
              />
            </div>
            <div className="input-field">
              <label htmlFor="industry" className="required">Industry Name</label>
              <br />
              <select id="industry" name="industry" placeholder="industry">
                <option name="google">Google</option>
                <option name="Amazon">Amazon</option>
                <option name="LinkedIn">LinkedIn</option>
                <option name="Yahoo">Yahoo</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="hobby" className="required">Hobbies</label>
              <br />
              <select id="hobby" name="hobby">
                <option name="Football">Football</option>
                <option name="Singing">Singing</option>
                <option name="Trekking">Trekking</option>
                <option name="Dancing">Dancing</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="lang" className="required">Language</label>
              <br />
              <select id="lang" name="lang">
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="hobby" className="required">Hobbies</label>
              <br />
              <select id="hobby" name="hobby">
                <option name="Football">Football</option>
                <option name="Singing">Singing</option>
                <option name="Trekking">Trekking</option>
                <option name="Dancing">Dancing</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="game" className="required">Game</label>
              <br />
              <select id="lang" name="lang">
                <option value="pes">PES</option>
                <option value="pubg">PUBG</option>
                <option value="ff">Freefire</option>
                <option value="counter">Counter Strike</option>
                <option value="ninja">Ninja Turtles</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="count" className="required">Random count per month</label>
              <br />
              <input
                type="text"
                id="count"
                name="count"
                placeholder="Total count per month"
              />
            </div>
            <div className="input-field">
              <label htmlFor="visit" className="required">Expected total visits in this page</label>
              <br />
              <input
                type="text"
                id="visit"
                name="visit"
                placeholder="In Number"
              />
            </div>
          </div>
          <div className="input-grp">
           
            <div className="input-field">
              <label htmlFor="purpose" className="required">Purpose of using fake form</label>
              <br />
              <input style={{height:"84px"}}
                type="text"
                id="purpose"
                name="purpose"
                placeholder="Purpose of using fake form"
              />
              </div>
               <div className="input-field">
              <label htmlFor="desc" className="required">Description</label>
              <br />
              <input style={{height:"84px"}}
                type="text"
                id="desc"
                name="desc"
                placeholder="About 20 Words"
              />
            </div>
            </div>
            <div className="input-group">
            <div className="input-field">
              <label htmlFor="email" className="required">Contact email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Contact email"
              />
            </div>
            </div>
        
        </form>

      </div>
      <div className="fileSection">
        <div className="portion1">
        <h3 className="required">Certification of Incorporation</h3>
        <p>Upload the incorporation certificate</p>
        </div>
        <div className="portion2">
             <img src={file} alt="file"/>
             <div className="file">
                <p><span style={{textDecoration:"underline",color:"#1D1D22"}}> Click to upload</span> or drag and drop</p>
                <p>Maximum file size 50 MB</p>
             </div>
        </div>
      </div>
      <div className="fileSection">
        <div className="portion1">
        <h3 className="required">Company Logo</h3>
        <p>Upload the company logo</p>
        </div>
        <div className="portion2">
             <img src={file} alt="file"/>
             <div className="file">
                <p><span style={{textDecoration:"underline",color:"#1D1D22"}}> Click to upload</span> or drag and drop</p>
                <p>Maximum file size 50 MB</p>
             </div>
        </div>
      </div>
      
    </div>
  );
}
