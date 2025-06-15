import React, { FC } from "react";

export type ProductComparison = {
  id: string;
  title: string;
  price: string;
  img: string;
  quantity: number;
  material: string;
  rating: number;
  reviewCount: number;
  comment: string;
  general: {
    socialPackage: string;
    modelNo: string;
    secondaryMaterial: string;
    configuration: string;
    upholsteryMaterial: string;
    upholsteryColor: string;
  };
  product: {
    fillingMaterial: string;
    finishType: string;
    adjustableHeadrest: string;
    maximumLoadCapacity: string;
    originOfManufacture: string;
  };
  Dimensions: {
    width: string;
    height: string;
    depth: string;
    weight: string;
    seatHeight: string;
    legHeight: string;
  };
  warranty: {
    warrantySummary: string;
    warrantyServiceType: string;
    coveredInWarranty: string;
    notCoveredInWarranty: string;
    domesticWarranty: string;
  };
};

interface ComparisonTableProps {
  data: ProductComparison[];
}

const ComparisonTable: FC<ComparisonTableProps> = ({ data }) => {
  // Always ensure we have exactly 3 columns (even if some are empty)
  const columns = Array(3).fill(null);

  const renderRow = (label: string, values: string[]) => (
    <tr>
      <th className="text-left p-3 lg:pl-6 font-normal text-sm lg:text-[20px]   min-w-[200px] lg:min-w-[300px] border-r border-gray-200 align-top">
        {label}
      </th>
      {columns.map((_, idx) => {
        const value = values[idx] || "";
        return (
          <td
            key={idx}
            className={`p-3 font-normal text-sm lg:text-[20px]  min-w-[200px] lg:min-w-[300px] border-r border-gray-200 align-top ${
              idx === 2 ? "border-r-0" : ""
            }`}
          >
            {value}
          </td>
        );
      })}
    </tr>
  );

  return (
    <div className="overflow-x-auto p-2 md:p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-700 text-sm align-top border-t border-gray-200">
            <th className="min-w-[200px] lg:min-w-[300px] p-3 border-r border-gray-200 align-top"></th>
            {columns.map((_, idx) => {
              const product = data[idx];
              return (
                <th
                  key={idx}
                  className={`p-3 font-semibold text-base text-gray-800 border-r border-gray-200 align-top ${
                    idx === 2 ? "border-r-0" : ""
                  }`}
                >
                  {product ? (
                    <div>{product.title}</div>
                  ) : (
                    <div className="text-gray-300  min-w-[200px] lg:min-w-[300px]">
                      Product {idx + 1}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* General Section */}
          <tr className="align-top">
            <td className="font-medium text-[20px] md:text-[28px] p-3 lg:pl-6 border-r border-gray-200 align-top">
              General
            </td>
            {columns.map((_, idx) => (
              <td
                key={idx}
                className={`border-r border-gray-200 align-top ${
                  idx === 2 ? "border-r-0" : ""
                }`}
              ></td>
            ))}
          </tr>
          {renderRow(
            "Sales Package",
            data.map((p) => p.general.socialPackage)
          )}
          {renderRow(
            "Model Number",
            data.map((p) => p.general.modelNo)
          )}
          {renderRow(
            "Secondary Material",
            data.map((p) => p.general.secondaryMaterial)
          )}
          {renderRow(
            "Configuration",
            data.map((p) => p.general.configuration)
          )}
          {renderRow(
            "Upholstery Material",
            data.map((p) => p.general.upholsteryMaterial)
          )}
          {renderRow(
            "Upholstery Color",
            data.map((p) => p.general.upholsteryColor)
          )}

          {/* Product Section */}
          <tr className="align-top">
            <td className="font-medium text-[20px] md:text-[28px] p-3 lg:pl-6 pt-14 border-r border-gray-200 align-top">
              Product
            </td>
            {columns.map((_, idx) => (
              <td
                key={idx}
                className={`border-r border-gray-200 align-top ${
                  idx === 2 ? "border-r-0" : ""
                }`}
              ></td>
            ))}
          </tr>
          {renderRow(
            "Filling Material",
            data.map((p) => p.product.fillingMaterial)
          )}
          {renderRow(
            "Finish Type",
            data.map((p) => p.product.finishType)
          )}
          {renderRow(
            "Adjustable Headrest",
            data.map((p) => p.product.adjustableHeadrest)
          )}
          {renderRow(
            "Maximum Load Capacity",
            data.map((p) => p.product.maximumLoadCapacity + " KG")
          )}
          {renderRow(
            "Origin of Manufacture",
            data.map((p) => p.product.originOfManufacture)
          )}

          {/* Dimensions Section */}
          <tr className="align-top">
            <td className="font-medium text-[20px] md:text-[28px] p-3 lg:pl-6 pt-14 border-r border-gray-200 align-top">
              Dimensions
            </td>
            {columns.map((_, idx) => (
              <td
                key={idx}
                className={`border-r border-gray-200 align-top ${
                  idx === 2 ? "border-r-0" : ""
                }`}
              ></td>
            ))}
          </tr>
          {renderRow(
            "Width",
            data.map((p) => p.Dimensions.width + " cm")
          )}
          {renderRow(
            "Height",
            data.map((p) => p.Dimensions.height + " cm")
          )}
          {renderRow(
            "Depth",
            data.map((p) => p.Dimensions.depth + " cm")
          )}
          {renderRow(
            "Weight",
            data.map((p) => p.Dimensions.weight + " KG")
          )}
          {renderRow(
            "Seat Height",
            data.map((p) => p.Dimensions.seatHeight + " cm")
          )}
          {renderRow(
            "Leg Height",
            data.map((p) => p.Dimensions.legHeight + " cm")
          )}

          {/* Warranty Section */}
          <tr className="align-top">
            <td className="font-medium text-[20px] md:text-[28px] p-3 lg:pl-6 pt-14 border-r border-gray-200 align-top">
              Warranty
            </td>
            {columns.map((_, idx) => (
              <td
                key={idx}
                className={`border-r border-gray-200 align-top ${
                  idx === 2 ? "border-r-0" : ""
                }`}
              ></td>
            ))}
          </tr>
          {renderRow(
            "Warranty Summary",
            data.map((p) => p.warranty.warrantySummary)
          )}
          {renderRow(
            "Warranty Service Type",
            data.map((p) => p.warranty.warrantyServiceType)
          )}
          {renderRow(
            "Covered in Warranty",
            data.map((p) => p.warranty.coveredInWarranty)
          )}
          {renderRow(
            "Not Covered in Warranty",
            data.map((p) => p.warranty.notCoveredInWarranty)
          )}
          {renderRow(
            "Domestic Warranty",
            data.map((p) => p.warranty.domesticWarranty)
          )}

          {/* Button Row */}
          <tr className="align-top">
            <td className="border-r border-gray-200 align-top"></td>
            {columns.map((_, idx) => {
              const product = data[idx];
              return (
                <td
                  key={idx}
                  className={`py-4 p-3 border-r border-gray-200 align-top ${
                    idx === 2 ? "border-r-0" : ""
                  }`}
                >
                  {product && (
                    <button className="bg-[#b98e2f] hover:bg-yellow-700 text-white px-6 lg:px-14 py-2 lg:py-3 text-sm lg:text-[20px] ">
                      Add To Cart
                    </button>
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
