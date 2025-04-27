/**
 * @description       : D365ActivityCodeWrapper is wrapper for D365 Environments which uses to
 *                      create a resquest body and to handle the response for Actvity Code Entity
 * @author            : Shivam Gupta
 * @last modified on  : 20 Sep 2023
 **/
public class D365ActivityCodeWrapper {
  public String id;
  public String numberParse;
  public String displayName;
  public String typeParse;
  public String itemCategoryId;
  public String itemCategoryCode;
  public boolean blocked;
  public String gtin;
  public Integer inventory;
  public Double unitPrice;
  public boolean priceIncludesTax;
  public Double unitCost;
  public String taxGroupId;
  public String taxGroupCode;
  public String baseUnitOfMeasureId;
  public String baseUnitOfMeasureCode;
  public String lastModifiedDateTime;
}