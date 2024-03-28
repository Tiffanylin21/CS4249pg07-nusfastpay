import { COLORS } from "../../../Utils/Colors";

export function RightArrow() {
  return (
    <div
      style={{
        backgroundColor: COLORS.transparent,
        color: COLORS.darkGray,
        border: "none",
        marginLeft: "20px",
      }}
    >
      <h2 style={{ fontWeight: "bold" }}>{`>`}</h2>
    </div>
  );
}
