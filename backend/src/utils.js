function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
}

function hasPromo(item, promoNeeded) {
  const matchedPromo = item.promo.filter(currentPromos =>
    promoNeeded.includes(currentPromos)
  );
  if (!matchedPromo.length) {
    throw new Error(`Invalid Promo Code: ${promoNeeded}`);
  }
}

exports.hasPermission = hasPermission;

exports.hasPromo = hasPromo;
