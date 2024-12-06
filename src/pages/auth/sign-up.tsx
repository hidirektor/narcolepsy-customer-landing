import React, { Fragment, memo, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';  // Image component from next/image
import PhoneNumberInput from '@/components/inputs/PhoneInput';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const defaultImages = [
    "/assets/images/user/profile/default1.png",
    "/assets/images/user/profile/default2.png",
    "/assets/images/user/profile/default3.png",
  ];

  const [selectedImage, setSelectedImage] = useState(defaultImages[0]);
  const [file, setFile] = useState<string | null>(null);

  const { control, setValue, handleSubmit, formState: { errors, isSubmitted } } = useForm();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files ? e.target.files[0] : null;
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
    }
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setFile(null);
  };

  return (
      <Fragment>
        <main className='main-content'>
          <div className='vh-100' style={{ backgroundImage: "url(/assets/images/pages/01.webp)", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundAttachment: 'fixed', position: 'relative', minHeight: '500px', overflow: 'auto' }}>
            <Container>
              <Row className='justify-content-center align-items-center height-self-center vh-100'>
                <Col lg="8" md="12" className='align-self-center'>
                  <div className="user-login-card bg-body">
                    <h4 className='text-center mb-5'>Hesap Oluştur</h4>
                    <Row lg="2" className='row-cols-1 g-2 g-lg-5'>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>İsim</Form.Label>
                        <Form.Control type="text" className='rounded-0' required />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>Soyisim</Form.Label>
                        <Form.Control type="text" className='rounded-0' required />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" className='rounded-0' required />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>E-Posta Adresi</Form.Label>
                        <Form.Control type="text" className='rounded-0' required />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>Telefon Numarası</Form.Label>
                        <PhoneNumberInput
                            control={control}
                            setValue={setValue}
                            id="phoneNumber"
                            errors={errors}
                            isSubmitted={isSubmitted}
                        />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>Doğum Tarihi</Form.Label>
                        <Form.Control type="date" className='rounded-0' required />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>Şifre</Form.Label>
                        <Form.Control type="password" className='rounded-0' required />
                      </Col>
                      <Col>
                        <Form.Label className='text-white fw-500 mb-2'>Şifreni Doğrula</Form.Label>
                        <Form.Control type="password" className='rounded-0' required />
                      </Col>
                      <Col lg="12">
                        <Form.Label className='text-white fw-500 mb-2'>Profil Fotoğrafı</Form.Label>
                        <div className="d-flex justify-content-center align-items-center">
                          <div
                              className="d-flex justify-content-center align-items-center"
                              style={{ cursor: 'pointer' }}
                              onClick={() => document.getElementById('fileInput')?.click()}
                          >
                            {file ? (
                                <Image src={file} alt="Profil Fotoğrafı" width={100} height={100} className="rounded-circle" />
                            ) : (
                                <Image src={selectedImage} alt="Profil Avatarı" width={100} height={100} className="rounded-circle" />
                            )}
                          </div>

                          <input
                              type="file"
                              id="fileInput"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="d-none"
                          />

                          <div className="mt-2 mx-3 d-flex justify-content-center align-items-center">
                            <span>Ya da</span>
                          </div>

                          <div className="mt-2 d-flex justify-content-center align-items-center">
                            {defaultImages.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Avatar ${index + 1}`}
                                    width={50}
                                    height={50}
                                    className="rounded-circle mx-2"
                                    onClick={() => handleImageSelect(image)}
                                    style={{ cursor: 'pointer', border: selectedImage === image ? '2px solid #007bff' : 'none' }}
                                />
                            ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Form.Label className='list-group-item d-flex align-items-center mt-5 mb-3 text-white'>
                      <Form.Check.Input className='m-0 me-2' type='checkbox' />
                      <Link href="/extra/terms-of-use" className='ms-1' >
                        Şartlar ve koşulları*
                      </Link>
                      okudum ve kabul ediyorum.
                    </Form.Label>
                    <Row className='text-center'>
                      <Col lg="3"></Col>
                      <Col lg="6">
                        <div className="full-button">
                          <div className="iq-button">
                            <Link href="#" className="btn text-uppercase position-relative">
                              <span className="button-text">Kayıt Ol</span>
                              <i className="fa-solid fa-play"></i>
                            </Link>
                          </div>
                          <p className="mt-2 mb-0 fw-normal">Zaten bir hesabınız var mı?<Link href="/auth/login" className="ms-1">Giriş Yap</Link></p>
                        </div>
                      </Col>
                      <Col lg="3"></Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </Fragment>
  );
};

SignUp.layout = "Blank";
export default SignUp;