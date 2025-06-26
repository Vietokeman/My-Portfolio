import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar.jpg";
import "./introduction.scss";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="introduction-section my-5 my-md-7"
      style={{ position: "relative" }}
    >
      <Row>
        <Col xs={12} md={9}>
          <h2 className="text-center text-md-start">
            {i18n.resolvedLanguage === "en" ? (
              <>
                LET ME <span className="text-pink-100"> INTRODUCE </span> MYSELF
              </>
            ) : (
              <>
                <span className="text-pink-100">GIỚI THIỆU</span> BẢN THÂN
              </>
            )}
          </h2>
          <br />
          <p>
            {i18n.resolvedLanguage === "en" ? (
              <>
                I'm <b className="text-pink-100">Nguyễn Việt</b>, a fullstack
                developer passionate about building scalable systems with{" "}
                <b className="text-pink-100">.NET & Next.js</b>.
                <br />
                <br />
                I specialize in microservices, event-driven architecture
                (RabbitMQ, SignalR), and secure APIs using IdentityServer4.
                <br />
                <br />I also work with modern frontend tools like
                <b className="text-pink-100"> React, Angular & Tailwind CSS</b>,
                and deploy using
                <b className="text-pink-100"> Docker & Elastic Stack</b>.
              </>
            ) : (
              <>
                Mình là <b className="text-pink-100">Nguyễn Việt</b>, lập trình
                viên fullstack yêu thích xây dựng hệ thống mở rộng bằng{" "}
                <b className="text-pink-100">.NET & Next.js</b>.
                <br />
                <br />
                Mình chuyên về kiến trúc microservices, giao tiếp sự kiện
                (RabbitMQ, SignalR), và bảo mật với IdentityServer4.
                <br />
                <br />
                Ngoài ra mình còn sử dụng{" "}
                <b className="text-pink-100">React, Angular, Tailwind</b> và
                triển khai bằng
                <b className="text-pink-100"> Docker + Elastic Stack</b>.
              </>
            )}
          </p>
        </Col>
        <Col md={3} className="d-md-block d-none">
          <Tilt>
            <img src={avatarImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
      <div className="about-container d-none d-md-flex">
        <span className="about-label">{t("introSection.about")}</span>
        <span className="vertical-line"></span>
      </div>
    </section>
  );
};

export default Introduction;
