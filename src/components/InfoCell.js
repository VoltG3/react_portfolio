export default function InfoCell(props) {
   return (
       <div style={{
           display: 'flex',
           flexDirection: 'column'
       }}>
           <div
               style={{
                   width: 'var(--infoCell-width)',
                   height: 'auto',
                   borderTop: 'solid  2px var(--color-accent)',
                   borderBottom: 'solid 2px var(--color-accent)'
                }}
           >
               <p className="sectionInfo-textline-subsection-infocell-header">
                   { props.cellHeader }
               </p>
           </div>

           <div
               style={{
                    display: 'flex',
                    flexDirection: 'row'
               }}
           >
               <p className="sectionInfo-textline-subsection-infocell-textcontent">
                   { props.textLine01 }
               </p>

               <a
                   style={{
                       marginLeft: '-6px'
                   }}

                   className="sectionInfo-infocell-link"
                   target="_blank"

                   href={ "https://" + props.linkHref01 }>
                   { props.linkHref01 }
               </a>

           </div>

           <div
               style={{
                    display: 'flex',
                    flexDirection: 'row'
               }}
           >
               <p className="sectionInfo-textline-subsection-infocell-textcontent">
                   { props.textLine02 }
               </p>

               <a
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
