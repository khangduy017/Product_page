import React, { useState } from 'react'
import './Account.css'
import background from '../../../../Images/background.jpg'
import avatar from '../../../../Images/avatar.jpg'

function Account(props) {

  const [name, setName] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [numberPhone, setNumberPhone] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')

  const handleChangeName = event => setName(event.target.value)
  const handleChangeBirthDay = event => setBirthDay(event.target.value)
  const handleChangePhone = event => setNumberPhone(event.target.value)
  const handleChangeEmail = event => setEmail(event.target.value)
  const handleChangeGender = event => setGender(event.target.value)
  const handleChangeAddress = event => setAddress(event.target.value)


  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const handleChangeCurrentPassword = event => setCurrentPassword(event.target.value)
  const handleChangeNewPassword = event => setNewPassword(event.target.value)
  const handleChangeConfirmNewPassword = event => setConfirmNewPassword(event.target.value)

  const [wrongCurrentPassword, setWrongCurrentPassword] = useState(false)
  const [wrongNewPassword, setWrongNewPassword] = useState(false)
  const [wrongConfirmPassword, setWrongConfirmPassword] = useState(false)



  return (
    <div className='Account'>
      <img className='background' src={background} alt='' />
      <div className='information'>
        {props.page === 1 && <div className='form1'>
          <div className='text'>
            <div className='form-title star'>
              <p>Họ và tên</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeName} className='input' placeholder='Nhập họ và tên' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Sinh nhật</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeBirthDay} className='input' placeholder='dd/mm/yyyy' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Số điện thoại</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangePhone} className='input' placeholder='Nhập số điện thoại' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Email</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeEmail} className='input' placeholder='Nhập email' />
          </div>
          <div className='text'>
            <p className='form-title'>Giới tính</p>
            <input onChange={handleChangeGender} className='input' placeholder='Nam/Nữ/Khác' />
          </div>
          <div className='text'>
            <div className='form-title star'>
              <p>Địa chỉ mặc định</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeAddress} className='input' placeholder='Nhập địa chỉ' />
          </div>
        </div>}
        {props.page === 2 && <div className='form2'>
          <div className='form-title2'>Đổi mật khẩu</div>
          <div className='form2-main'>
            <p className='form-title form-title2'>Mật khẩu hiện tại</p>
            <input onChange={handleChangeCurrentPassword} className='input  input2' placeholder='Nhập mật khẩu hiện tại' />
            <p className='form-title form-title2 midle'>Mật khẩu mới</p>
            <input onChange={handleChangeNewPassword} className='input input2 midle' placeholder='Nhập mật khẩu mới' />
            <div className='form-title form-title2'>
              <p>Xác nhận mật khẩu</p>
              <p style={{ color: 'red' }}>*</p>
            </div>
            <input onChange={handleChangeConfirmNewPassword} className='input input2' placeholder='Xác nhận lại mật khẩu' />
          </div>
          {wrongCurrentPassword && <p className='wrongCurrentPassword'>Mật khẩu hiện tại của bạn không đúng.</p>}
          {wrongNewPassword && <p className='wrongNewPassword'>Mật khẩu mới của bạn không hợp lệ.</p>}
          {wrongConfirmPassword && <p className='wrongConfirmPassword'>Mật khẩu xác nhận của bạn không trùng khớp</p>}
        </div>}
      </div>
      <div className='avatar'>
        <img className='background' src={avatar} alt='' />
      </div>
      <div className='shot'>
        <svg width="20" height="18" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.05 17H0.95C0.425125 17 0 16.5774 0 16.0556V2.83333C0 2.31153 0.425125 1.88889 0.95 1.88889H4.75V0.944444C4.75 0.422639 5.17513 0 5.7 0H13.3C13.8249 0 14.25 0.422639 14.25 0.944444V1.88889H18.05C18.5749 1.88889 19 2.31153 19 2.83333V16.0556C19 16.5774 18.5749 17 18.05 17ZM1.9 15.1111H17.1V3.77778H13.3C12.7751 3.77778 12.35 3.35514 12.35 2.83333V1.88889H6.65V2.83333C6.65 3.35514 6.22487 3.77778 5.7 3.77778H1.9V15.1111Z" fill="#969695" />
          <path d="M9.5 14.1666C6.88038 14.1666 4.75 12.0487 4.75 9.44439C4.75 6.84008 6.88038 4.72217 9.5 4.72217C12.1196 4.72217 14.25 6.84008 14.25 9.44439C14.25 12.0487 12.1196 14.1666 9.5 14.1666ZM9.5 6.61106C7.92775 6.61106 6.65 7.88133 6.65 9.44439C6.65 11.0074 7.92775 12.2777 9.5 12.2777C11.0722 12.2777 12.35 11.0074 12.35 9.44439C12.35 7.88133 11.0722 6.61106 9.5 6.61106Z" fill="#969695" />
        </svg>
      </div>
      <button className='save'>lưu thay đổi</button>
    </div>
  )
}

export default Account