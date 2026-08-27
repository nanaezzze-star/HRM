import { useParams } from "react-router-dom";
import { useUserById } from "../../store/api";
import Map from "./Map";
import * as styles from "./userRpofile.module.css";

export default function Profile() {
  const { id } = useParams();
  const { data, isLoading, error } = useUserById(id);

  if (isLoading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <img src={data?.image} alt="User avatar" className={styles.avatar} />
        <div className={styles.headerInfo}>
          <div className={styles.nameRow}>
            <h1 className={styles.name}>
              {data?.firstName} {data?.lastName}
            </h1>
            <span className={styles.cityBadge}>{data?.address?.city}</span>
          </div>
          <p className={styles.title}>
            {data?.company?.title || "Specialist"} • {data?.company?.name}
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Candidate Details</h2>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{data?.email}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>{data?.phone}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Company</span>
              <span className={styles.infoValue}>{data?.company?.name}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Department</span>
              <span className={styles.infoValue}>
                {data?.company?.department}
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Education</span>
              <span className={styles.infoValue}>{data?.university}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Age / Gender</span>
              <span className={styles.infoValue}>
                {data?.age} y.o., {data?.gender}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Location</h2>
          <p className={styles.addressText}>
            {data?.address?.address}, {data?.address?.city},{" "}
            {data?.address?.state}
          </p>
          <div className={styles.mapContainer}>
            <Map
              lat={data?.address?.coordinates?.lat}
              lng={data?.address?.coordinates?.lng}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
