import styles from "./previewbox.module.scss";
import img_desktop from "../../imgs//image-header-desktop.jpg";

export default function Previewbox() {
  return (
    <>
      <div className={styles.parent_box}>
        <div className={styles.two_sides}>
          <div className={styles.titles}>
            <h1>
              Get <span className={styles.span_ins}>insights</span> that help
              <br />
              your business grow.
            </h1>
          </div>
          <div className={styles.titles}>
            <p className={styles.para_title}>
              Discover the benefits of dta analytics and make
              <br />
              better decisons regarding revenure. customer
              <br />
              experience, and overall efficiency
            </p>
          </div>
          <div className={styles.titles_boxs}>
            <div className={styles.box_comapines}>
              <h1>10k+</h1>
              <p>COMPANIES</p>
            </div>
            <div className={styles.box_comapines}>
              <h1>314</h1>
              <p>TEMPLATES</p>
            </div>
            <div className={styles.box_comapines}>
              <h1>12M+</h1>
              <p>QUERIES</p>
            </div>
          </div>
        </div>
        <div className={styles.side_img_background}>
          <img src={img_desktop} alt="dekstop" />
        </div>
      </div>
    </>
  );
}
