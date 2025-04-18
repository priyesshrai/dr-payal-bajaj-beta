import React from 'react'

export default function IvfSection() {
    return (
        <section style={{ backgroundImage: "url('/images/main-image/about-banner.png')", backgroundSize: "cover", backgroundPosition: "center", width:"100%" }} className=''>
            <h2 className='mt-1 text-left relative text-5xl font-bold text-[var(--primary-color)]'>
                What is IVF?
            </h2>
            <p className='text-left text-base mt-5 max-w-2xl text-[var(--secondary-color)]'>
                IVF which is In Vitro Fertilization is also known as test tube baby. In normal pregnancy, the sperm produced by the male needs to be fertilized with the egg produced by the female body. In cases where natural pregnancy is not possible, these eggs are extracted with the help of a particular instrument and fertilized with the sperm in the laboratory. The eggs are retrieved using a minor procedure called ovum pick up, vaginally. This procedure is carried out under sedation so you don’t feel any pain. After the ovum pick-up procedure, the eggs are fertilized with sperm and the resultant embryos are formed within 3 to 5 days. A better embryo is selected and implanted in the uterus of the female partner. The after-procedure is just like any other pregnant woman. After 9 months the baby is delivered normally or through cesarean, accordingly.
            </p>

            <h3 className='mt-8 text-left relative text-2xl font-bold text-[var(--primary-color)]'>
                Why Choose Nandi IVF Centre
            </h3>
            <p className='text-left text-base mt-1 max-w-2xl text-[var(--secondary-color)]'>
                With a vision to provide care beyond comparison in the field of fertility medicine, The Nandi Fertility Centre aspires to be a reliable partner in providing comprehensive fertility treatment solutions, with the ease of accessibility and affordability. Reflecting our endeavours in offering a qualitative and result-bound fertility care, the best Fertility Centre in Coimbatore witnesses the baby miracles on a daily basis.
            </p>
        </section>
    )
}
