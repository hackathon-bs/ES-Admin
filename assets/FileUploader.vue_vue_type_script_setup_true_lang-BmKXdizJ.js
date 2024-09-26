import{ao as h,ap as l,aq as u,ar as c,as as f,d as b,o as g,c as m,e as p,v}from"./index-CxjdIz8e.js";const y=".dropzone{border:2px dashed #b9bec4;border-radius:20px;padding:50px;text-align:center;cursor:pointer}.dropzone:hover{background-color:#e3f2f2;border-color:#5aabac}.dropzone.disabled{cursor:not-allowed}.dropzone.disabled:hover{background-color:#f8f9fa;border-color:#b9bec4}.dropzone .choose-file{color:#017d80;text-decoration-line:underline}.dropzone .title{font-size:14px;display:grid;color:#767676}.dropzone .margin-bottom{margin-bottom:49px!important}.dropzone .error-msg{display:flex;align-items:center;justify-content:center;gap:4px;color:#b3261e;font-size:12px;font-weight:500}.dropzone.dragover{border-color:#000}";var D=Object.defineProperty,F=Object.getOwnPropertyDescriptor,a=(e,t,i,s)=>{for(var r=s>1?void 0:s?F(t,i):t,d=e.length-1,n;d>=0;d--)(n=e[d])&&(r=(s?n(t,i,r):n(r))||r);return s&&r&&D(t,i,r),r};let o=class extends u{constructor(){super(...arguments),this.baseIdentifier="",this.acceptedFormat=".jpeg, .png",this.isMultiple=!1,this.isDisabled=!1,this.showError=!1,this.isCapture=!1,this.errorMsg="One or more file types are not supported"}render(){return c`
      <div class="br-file-upload" part="br-file-upload">
        <div
          role="button"
          tabindex="0"
          data-br=${`${this.baseIdentifier}_br-file-upload`}
          class="dropzone ${this.isDisabled?"disabled":""}"
          part="br-file-upload-container"
          @dragover="${this.handleDragOver}"
          @drop="${this.handleDrop}"
          @click="${this.triggerFileInput}"
        >
          <slot name="title" class="title"></slot>

          ${this.showError?c`
                <div id="error-msg" class="error-msg">
                  <br-icon-error-lit width="16"></br-icon-error-lit>
                  ${this.errorMsg}
                </div>
              `:""}

          <input
            type="file"
            id="file-input"
            aria-labelledby="file-input-label"
            ?multiple=${this.isMultiple}
            accept="${this.acceptedFormat}"
            @change="${this.handleFiles}"
            hidden
            ?disabled="${this.isDisabled}"
            ?capture="${this.isCapture}"
          />
        </div>
        <slot name="meta-info"></slot>
      </div>
    `}handleDragOver(e){this.isDisabled||(e.preventDefault(),e.dataTransfer.dropEffect="copy",e.target.classList.add("dragover"))}handleDrop(e){if(this.isDisabled)return;e.preventDefault(),e.target.classList.remove("dragover");const t=Array.from(e.dataTransfer.files);this.addFiles(t)}handleFiles(e){if(this.isDisabled)return;const t=e.target,i=Array.from(t.files);this.addFiles(i),t.value=""}addFiles(e){if(this.isDisabled)return;const t=this.acceptedFormat.split(",").map(r=>r.trim().toLowerCase()),i=[],s=[];e.forEach(r=>{const d=r.name.split(".").pop().toLowerCase();t.includes(`.${d}`)?i.push({file:r}):s.push(r)}),i.length>0&&this.emitFiles(i),s.length>0&&this.emitInvalidFiles(s)}triggerFileInput(){this.isDisabled||this.shadowRoot.querySelector('input[type="file"]').click()}emitFiles(e){if(this.isDisabled)return;const t=new CustomEvent("files-uploaded",{detail:{files:e}});this.dispatchEvent(t)}emitInvalidFiles(e){if(this.isDisabled)return;const t=new CustomEvent("invalid-files-uploaded",{detail:{files:e}});this.dispatchEvent(t)}};o.styles=h(y);a([l({type:String})],o.prototype,"baseIdentifier",2);a([l({type:String})],o.prototype,"acceptedFormat",2);a([l({type:Boolean})],o.prototype,"isMultiple",2);a([l({type:Boolean})],o.prototype,"isDisabled",2);a([l({type:Boolean})],o.prototype,"showError",2);a([l({type:Boolean})],o.prototype,"isCapture",2);a([l({type:String})],o.prototype,"errorMsg",2);o=a([f("br-file-upload")],o);const $=b({__name:"FileUploader",setup(e){return(t,i)=>(g(),m("div",null,i[0]||(i[0]=[p("br-file-upload",null,[p("div",{slot:"title"},[v(" Drag and drop files here, or "),p("span",{class:"choose-file"},"choose file")])],-1)])))}});export{$ as _};
