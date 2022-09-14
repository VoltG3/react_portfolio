
export default function InfoCell(props) {
   return (
       <div style={{
           display: 'flex',
           flexDirection: 'column',
       }}>
           <div
               style={{
                   display: 'flex',
                   justifyContent: 'center',
                   borderTop: 'solid  2px var(--color-accent)',
                   borderBottom: 'solid 2px var(--color-accent)'
                }}
           >
               <p className="sectionInfo-textline-subsection-infocell-header">
                   { props.cellHeader }
               </p>
           </div>

           {/* // ******************
               // * First textline *
               // ******************/}

           <div className={"media460px"}
               style={{
                    display: 'flex',
                    flexDirection: 'row'
               }}
           >
               <p className="sectionInfo-textline-subsection-infocell-textcontent">
                   { props.textLine01 }
               </p>

               <a id={"media460px"}
                   style={{
                       marginLeft: '-6px'
                   }}

                   className="sectionInfo-infocell-link"
                   target="_blank"

                   href={ "https://" + props.linkHref01 }>
                   { props.linkHref01 }
               </a>

           </div>

           {/* // *******************
               // * Second textline *
               // *******************/}

           <div className={"media460px"}
               style={{
                    display: 'flex',
                    flexDirection: 'row'
               }}
           >
               <p className="sectionInfo-textline-subsection-infocell-textcontent">
                   { props.textLine02 }
               </p>

               <a id={"media460px"}
                   style={{
                       marginLeft: '-6px'
                   }}

                   className="sectionInfo-infocell-link"
                   target="_blank"

                   href={ "https://" + props.linkHref02 }>
                   { props.linkHref02 }
               </a>
           </div>

       </div>
   )
}
