import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div>
      <a
          className="relative m-auto flex w-max cursor-pointer items-center space-x-4 rounded-lg border bg-slate-200 p-2 px-10"
          href={'https://drive.google.com/file/d/1y07DZdv7oPGucnDmmwLa_DWzNCjbxTyY/view'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div className="text-black">Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
