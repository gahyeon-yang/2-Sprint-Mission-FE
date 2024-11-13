import styles from "./EditDeleteModal.module.css";
export default function EditDeleteModal({ onEdit, onDelete, position }) {
  return (
    <>
      <div
        className={styles.modal}
        style={{ top: position.top, left: position.left }}
      >
        <ul className={styles.option_list}>
          <li className={styles.option_item} onClick={onEdit}>
            수정하기
          </li>
          <li className={styles.option_item} onClick={onDelete}>
            삭제하기
          </li>
        </ul>
      </div>
    </>
  );
}
